const express = require('express');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const { School, District } = require('../db/models');

const schoolRouter = express.Router();

const jwtSecretKey = 'your-secret-key';

schoolRouter.post('/signup', async (req, res) => {
  const {
    schoolName, adress, phone, email, password, info, imgSchool,
  } = req.body;
  console.log('TTTTTTTTTTTTTTTTTTTT', req.body);
  if (schoolName && adress && phone && email && password && info && imgSchool) {
    try {
      const [school, created] = await School.findOrCreate({
        where: { email },
        defaults: {
          schoolName, adress, phone, info, imgSchool, password: await bcrypt.hash(password, 10),
        },
      });
      if (!created) return res.sendStatus(401);

      req.session.schoolId = school.id;

      const token = jwt.sign({ schoolName: school.schoolName }, jwtSecretKey, { expiresIn: '1h' });
      return res.json({ token });
    } catch (e) {
      console.log(e);
      return res.sendStatus(500);
    }
  }
  return res.sendStatus(500);
});

schoolRouter.post('/login', async (req, res) => {
  const { email, password } = req.body;
  if (email && password) {
    try {
      const school = await School.findOne({
        where: { email },
      });
      if (!(await bcrypt.compare(password, school.password))) {
        return res.sendStatus(401);
      }

      req.session.userId = school.id;

      const token = jwt.sign({ schoolName: school.schoolName }, jwtSecretKey, { expiresIn: '1h' });

      return res.json({ token });
    } catch (e) {
      console.log(e);
      return res.sendStatus(500);
    }
  }
  return res.sendStatus(500);
});

schoolRouter.get('/check', (req, res) => {
  const token = req.headers.authorization;

  if (!token) {
    return res.sendStatus(401);
  }

  jwt.verify(token, jwtSecretKey, (err, decoded) => {
    if (err) {
      return res.sendStatus(401);
    }
    return res.json({ schoolName: decoded.schoolName });
  });
});

// router.get('/logout', (req, res) => {
//   req.session.destroy();
//   res.clearCookie('sid').sendStatus(200);
// });

schoolRouter
  // .route('/:id/')
  .get('/:id/', async (req, res) => {
    const school = await School.findOne({
      where: { id: req.params.id },
      include: District, // Включение модели District должно быть частью объекта options
    }); res.json(school);
  });

schoolRouter
  .delete('/:id/', async (req, res) => {
    console.log('-------- delete ---------');
    try {
      // await School.destroy({ where: { id: req.params.id } });
      await School.destroy({ where: { id: req.params.id } });
      res.sendStatus(200);
    } catch (err) {
      console.error(err);
      res.sendStatus(500);
    }
  })
  .patch('/:id/', async (req, res) => {
    const schoolId = req.params.id;
    const {
      schoolName, adress, phone, email, info, imgSchool,
    } = req.body;
    console.log('мы тут', req.body);
    try {
      const [updatedRowCount] = await School.update(
        {
          schoolName, adress, phone, email, info, imgSchool,
        },
        { where: { id: schoolId } },
      );
      if (updatedRowCount === 1) {
        const schoolEdit = await School.findByPk(schoolId);

        // Обновление прошло успешно
        return res.json(schoolEdit);
      }
      // Нет записи для обновления или произошла другая ошибка
      return res.sendStatus(403); // Например, можно отправить статус 404, если запись не найдена
    } catch (error) {
      console.error('Error editing school', error);
      return res.sendStatus(500); // Ошибка сервера
    }
  });

module.exports = schoolRouter;
