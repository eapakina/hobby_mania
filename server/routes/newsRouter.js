const express = require("express");
const { Op, Sequelize } = require("sequelize");
const { Blog } = require("../db/models");

const newsRouter = express.Router();

newsRouter
  .route("/school/:id/")
  .get(async (req, res) => {
    try {
      const posts = await Blog.findAll({
        where: { schoolId: req.params.id },
      });
      res.json(posts);
    } catch (err) {
      console.error(err);
      res.status(500).json({ error: "Произошла ошибка при получении постов." });
    }
  })
  .post(async (req, res) => {
    try {
      if (!req.body.title || !req.body.content) {
        return res
          .status(400)
          .json({ error: "Необходимы заголовок и содержание." });
      }
      const newBook = await Blog.create(req.body);
      res.json(newBook);
    } catch (err) {
      console.error(err);
      res.status(500).json({ error: "Произошла ошибка при создании поста." });
    }
  });

newsRouter.route("/:id").delete(async (req, res) => {
  try {
    const post = await Blog.findOne({ where: { id: req.params.id } });
    if (!post) {
      return res.status(404).json({ error: "Пост не найден." });
    }
    await Blog.destroy({ where: { id: req.params.id } });
    res.sendStatus(200);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Произошла ошибка при удалении поста." });
  }
});

module.exports = newsRouter;
