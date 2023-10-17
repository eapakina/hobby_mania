const express = require("express");
const { Class, Day, Time, Category, School, Blog } = require("../db/models");

const router = express.Router();

router.get("/all/categorys", async (req, res) => {
  const categorys = await Category.findAll();
  res.json(categorys);
});

router.post("/:id/add", async (req, res) => {
  const {
    className,
    desription,
    category,
    day,
    time,
    isAvailable,
    age,
    schoolId,
  } = req.body;

  const categoryId = await Category.findOne({ where: { category } });
  const dayId = await Day.findOne({ where: { day } });
  const timeId = await Time.findOne({ where: { time } });

  const newClass = await Class.create({
    className,
    desription,
    categoryId: Number(categoryId.id),
    dayId: Number(dayId.id),
    timeId: Number(timeId.id),
    isAvailable,
    schoolId: Number(schoolId),
    age: Number(age),
  });
  const createdClass = await Class.findOne({
    include: [
      { model: Day },
      { model: Time },
      { model: Category },
      { model: School },
    ],
    where: { id: newClass.id },
  });
  res.json(createdClass);
});

router.delete("/:id/delete", async (req, res) => {
  try {
    await Class.destroy({ where: { id: req.params.id } });
    res.sendStatus(200);
  } catch (err) {
    console.error(err);
    res.sendStatus(500);
  }
});

router.patch("/:id/edit", async (req, res) => {
  const {
    className,
    desription,
    category,
    day,
    time,
    isAvailable,
    age,
    schoolId,
  } = req.body;
  const categoryId = await Category.findOne({ where: { category } });
  const dayId = await Day.findOne({ where: { day } });
  const timeId = await Time.findOne({ where: { time } });
  const newClass = await Class.update(
    {
      className,
      desription,
      categoryId: Number(categoryId.id),
      dayId: Number(dayId.id),
      timeId: Number(timeId.id),
      isAvailable,
      schoolId: Number(schoolId),
      age: Number(age),
    },
    { where: { id: req.params.id } }
  );
  const updatedClass = await Class.findOne({
    include: [
      { model: Day },
      { model: Time },
      { model: Category },
      { model: School },
    ],
    where: { id: req.params.id },
  });
  res.json(updatedClass);
});

router
  .route("/school/:id/")
  .get(async (req, res) => {
    console.log("----------- get ------------");
    const posts = await Blog.findAll({
      where: { schoolId: req.params.id },
    });
    res.json(posts);
  })
  .post(async (req, res) => {
    const newBook = await Blog.create(req.body);
    res.json(newBook);
  });

router.route("/:id").delete(async (req, res) => {
  try {
    await Blog.destroy({ where: { id: req.params.id } });
    res.sendStatus(200);
  } catch (err) {
    console.error(err);
    res.sendStatus(500);
  }
});

router.patch(async (req, res) => {
  try {
    const { id } = req.params;
    await Blog.update({ ...req.body }, { where: { id } });
    const updatedPost = await Blog.findOne({ where: { id } });
    return res.json(updatedPost);
  } catch (err) {
    console.error(err);
    return res.sendStatus(500);
  }
});

module.exports = router;
