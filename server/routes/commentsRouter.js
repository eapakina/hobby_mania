const express = require("express");
const { Comment } = require("../db/models");

const router = express.Router();

router.get("/:id/all", async (req, res) => {
  try {
    const commentEntry = await Comment.findAll({
      where: {  schoolId: req.params.id },
    });
    res.json(commentEntry);
  } catch (err) {
    console.error(err);
    res.sendStatus(500);
  }
});

router.post("/:id/add", async (req, res) => {
 
  try {
    const newBook = await Comment.create(req.body);
    res.json(newBook);
  } catch (err) {
    console.error(err);
    res.sendStatus(500);
  }
});

router.delete("/:id/delete", async (req, res) => {
  try {
    await Comment.destroy({ where: { id: req.session.userId } });
    res.sendStatus(200);
  } catch (err) {
    console.error(err);
    res.sendStatus(500);
  }
});

module.exports = router;
