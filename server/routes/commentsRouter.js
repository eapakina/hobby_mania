const express = require("express");
const { Comment } = require("../db/models");

const commentsRouter = express.Router();

commentsRouter.get("/:id/all", async (req, res) => {
  try {
    const reviews = await Comment.findAll({
      where: { schoolId: req.params.id },
    });
    res.json(reviews);
  } catch (err) {
    console.error(err);
    res.sendStatus(500);
  }
});

commentsRouter.post("/:id/add", async (req, res) => {
  console.log("----------- post ------------");
  console.log(req.session);
  console.log(req.session.userId);
  try {
    const newComment = await Comment.create({
      ...req.body,
      userId: req.session.userId,
    });
    res.json(newComment);
  } catch (err) {
    console.error(err);
    res.sendStatus(500);
  }
});

commentsRouter.delete("/:id", async (req, res) => {
  try {
    await Comment.destroy({ where: { id: req.params.id } });
    res.sendStatus(200);
  } catch (err) {
    console.error(err);
    res.sendStatus(500);
  }
});

module.exports = commentsRouter;
