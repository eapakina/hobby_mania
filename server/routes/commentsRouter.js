const express = require("express");
const { Comment } = require("../db/models");

const router = express.Router();

router.get("/school/:id", async (req, res) => {
  try {
    const commentEntry = await Comment.findAll({
      where: { userId: req.session.userId, schoolId: req.params.id },
    });
    res.json(commentEntry);
  } catch (err) {
    console.error(err);
    res.sendStatus(500);
  }
});

router.post("/school/:id", async (req, res) => {
  try {
    const newBook = await Comment.create(req.body);
    res.json(newBook);
  } catch (err) {
    console.error(err);
    res.sendStatus(500);
  }
});

router.delete("/:id", async (req, res) => {
  try {
    await Comment.destroy({ where: { id: req.session.userId } });
    res.sendStatus(200);
  } catch (err) {
    console.error(err);
    res.sendStatus(500);
  }
});

module.exports = router;
