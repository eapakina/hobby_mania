const express = require("express");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const sharp = require("sharp");
const fs = require("fs/promises");
const { User } = require("../db/models");
const upload = require("../middleware/multer");

const router = express.Router();

const jwtSecretKey = "your-secret-key";

router.post("/signup", upload.single("file"), async (req, res) => {
  console.log("1111111", req.body);
  console.log(req.file, "qqqqqqqqqqqqqqq");
  try {
    if (!req.file) {
      return res.status(400).json({ message: "File not found" });
    }

    const name = `${Date.now()}.webp`;

    const outputBuffer = await sharp(req.file.buffer).webp().toBuffer();

    await fs.writeFile(`./public/imgUser/${name}`, outputBuffer);

    const { userName, email, password } = req.body;

    if (userName && email && password) {
      try {
        const [user, created] = await User.findOrCreate({
          where: { email },
          defaults: {
            userName,
            img: name,
            password: await bcrypt.hash(password, 10),
          },
        });

        if (!created) {
          return res.sendStatus(401);
        }

        req.session.userId = user.id;

        const token = jwt.sign({ userName: user.userName }, jwtSecretKey, {
          expiresIn: "1h",
        });
        return res.json({ token });
      } catch (e) {
        console.log(e);
        return res.sendStatus(500);
      }
    } else {
      return res.sendStatus(400);
    }
  } catch (error) {
    console.error(error);
    return res.sendStatus(500);
  }
});

// router.post('/signup', async (req, res) => {
//   const { userName, email, password, img } = req.body;
//   console.log('TTTTTTTTTTTTTTTTTTTT',req.body);
//   if (userName && email && password && img) {
//     console.log('111111111111');
//     try {
//       const [user, created] = await User.findOrCreate({
//         where: { email },
//         defaults: { userName, img, password: await bcrypt.hash(password, 10) },
//       });
//       if (!created) return res.sendStatus(401);

//       req.session.userId = user.id;

//       const token = jwt.sign({ userName: user.userName }, jwtSecretKey, { expiresIn: '1h' });
//       return res.json({token});
//     } catch (e) {
//       console.log(e);
//       return res.sendStatus(500);
//     }
//   }
//   return res.sendStatus(500);
// });

router.post("/login", async (req, res) => {
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

      const token = jwt.sign({ userName: user.userName }, jwtSecretKey, {
        expiresIn: "1h",
      });

      return res.json({ token });
    } catch (e) {
      console.log(e);
      return res.sendStatus(500);
    }
  }
  return res.sendStatus(500);
});

router.get("/check", (req, res) => {
  const token = req.headers.authorization?.replace("Bearer ", "");

  console.log(token);
  if (!token) {
    console.log("token");
    return res.sendStatus(401);
  }

  jwt.verify(token, jwtSecretKey, (err, decoded) => {
    if (err) {
      console.log("jwt.verify");
      return res.sendStatus(401);
    }

    return res.json({ userName: decoded.userName });
  });
});

router.get('/getuser', async (req, res) => {
  const user = req.session.userId;
  return res.json(user);
});

router.get('/logout', (req, res) => {
  req.session.destroy();
  res.clearCookie("sid").sendStatus(200);
});

module.exports = router;
