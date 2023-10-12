const express = require('express');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const { User } = require('../db/models');

const router = express.Router();

const jwtSecretKey = 'your-secret-key';

router.post('/signup', async (req, res) => {
  const { userName, email, password, img } = req.body;
  console.log('TTTTTTTTTTTTTTTTTTTT',req.body);
  if (userName && email && password && img) {
    try {
      const [user, created] = await User.findOrCreate({
        where: { email },
        defaults: { userName, img, password: await bcrypt.hash(password, 10) },
      });
      if (!created) return res.sendStatus(401);
      
      req.session.userId = user.id;
      
      const token = jwt.sign({ userName: user.userName }, jwtSecretKey, { expiresIn: '1h' });
      return res.json({token});
    } catch (e) {
      console.log(e);
      return res.sendStatus(500);
    }
  }
  return res.sendStatus(500);
});

router.post('/login', async (req, res) => {
  const { email, password } = req.body;
  if (email && password) {
    try {
      const user = await User.findOne({
        where: { email },
      });
      if (!(await bcrypt.compare(password, user.password))) {
        return res.sendStatus(401);
      }

      req.session.userId = user.id;
      
      const token = jwt.sign({ userName: user.userName }, jwtSecretKey, { expiresIn: '1h' });

      return res.json({token});
    } catch (e) {
      console.log(e);
      return res.sendStatus(500);
    }
  }
  return res.sendStatus(500);
});

router.get('/check', (req, res) => {
  const token = req.headers.authorization;

  if (!token) {
    return res.sendStatus(401);
  }

  jwt.verify(token, jwtSecretKey, (err, decoded) => {
    if (err) {
      return res.sendStatus(401);
    }

    return res.json({ userName: decoded.userName });
  });
});



// router.get('/logout', (req, res) => {
//   req.session.destroy();
//   res.clearCookie('sid').sendStatus(200);
// });

module.exports = router;
