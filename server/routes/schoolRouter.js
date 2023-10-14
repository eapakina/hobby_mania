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
  .route('/:id/')
  .get(async (req, res) => {
    const school = await School.findOne({
      where: { id: req.params.id },
      include: District, // Включение модели District должно быть частью объекта options
    }); res.json(school);
  });
module.exports = schoolRouter;
