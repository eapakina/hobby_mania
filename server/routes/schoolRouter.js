const express = require('express');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const sharp = require('sharp');
const fs = require('fs/promises');
const { School, District } = require('../db/models');
const upload = require('../middleware/multer');


const schoolRouter = express.Router();

const jwtSecretKey = 'your-secret-key';

schoolRouter.post('/signup', upload.single('file'), async (req, res) => {
  console.log('2222222', req.body);
  console.log(req.file, 'wwwwwwwwwwwww');
  try {
    if (!req.file) {
      return res.status(400).json({ message: 'File not found' });
    }

    const name = `${Date.now()}.webp`;

    const outputBuffer = await sharp(req.file.buffer).webp().toBuffer();

    await fs.writeFile(`./public/imgUser/${name}`, outputBuffer);

    const { schoolName, adress, phone, info, email, password, district } = req.body;


    const distrId = await District.findOne({where:{district:req.body.district}})

    if (schoolName && adress && phone && info && email && password && distrId) {
      try {
        const [school, created] = await School.findOrCreate({
          where: { email },
          defaults: {
            schoolName,
            adress,
            phone,
            info,
            imgSchool: name,
            districtId:distrId.id,
            password: await bcrypt.hash(password, 10),
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
    // return res.sendStatus(500);
  } catch (error) {
    console.error(error);
    return res.sendStatus(500);
  }
});

schoolRouter.post('/login', async (req, res) => {
  const { email, password } = req.body;
  console.log('7777777777777777', req.body);
  if (email && password) {
    try {
      const school = await School.findOne({
        where: { email },
      });
      if (!(await bcrypt.compare(password, school.password))) {
        return res.sendStatus(401);
      }

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

// schoolRouter.get('/logout', (req, res) => {
//   req.session.destroy();
//   res.clearCookie('sid').sendStatus(200);
// });

//all districs
schoolRouter.get('/allDistr', async(req,res)=>{
  try{
    const allDistr= await District.findAll();
    res.json(allDistr)
  }catch(error){
    console.error(error);
    res.sendStatus(500)
  }
})

schoolRouter.get('/:id/', async (req, res) => {
  console.log('-------- get ---------');
  const school = await School.findOne({
    where: { id: req.params.id },
    include: District, // Включение модели District должно быть частью объекта options
  });
  res.json(school);
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
    const { schoolName, adress, phone, email, info, imgSchool } = req.body;
    console.log('мы тут', req.body);
    try {
      const [updatedRowCount] = await School.update(
        {
          schoolName,
          adress,
          phone,
          email,
          info,
          imgSchool,
        },
        { where: { id: schoolId } }
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
