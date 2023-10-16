const express = require('express');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const sharp = require('sharp');
const fs = require('fs/promises');
const { School } = require('../db/models');
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

    const {
      schoolName, adress, phone, info, email, password,
    } = req.body;

    if (schoolName && adress && phone && info && email && password) {
      try {
        const [school, created] = await School.findOrCreate({
          where: { email },
          defaults: {
            schoolName,
            adress,
            phone,
            info,
            imgSchool: name,
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

schoolRouter.get('/logout', (req, res) => {
  req.session.destroy();
  res.clearCookie('sid').sendStatus(200);
});

module.exports = schoolRouter;
