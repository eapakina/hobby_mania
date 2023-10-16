const express = require("express");
const { Op } = require("sequelize");
const { Class, Day, Time, Category, School, Blog } = require("../db/models");

const router = express.Router();

router.post("/search/all", async (req, res) => {
  const personName = req.body;
  console.log(personName);
  if (personName.length === 0) {
    const allClasses = await Class.findAll({
      include: [
        {
          model: Day,
        },
        {
          model: Time,
        },
        {
          model: Category,
        },
        {
          model: School,
        },
      ],
    });
    return res.json(allClasses);
  }
  const classes = await Class.findAll({
    include: [
      {
        model: Day,
      },
      {
        model: Time,
      },
      {
        model: Category,
        where: {
          category: {
            [Op.in]: personName,
          },
        },
      },
      {
        model: School,
      },
    ],
  });
  res.json(classes);
});

router.get("/:id/all", async (req, res) => {
  const { id } = req.params;
  const classes = await Class.findAll({
    include: [
      {
        model: Day,
      },
      {
        model: Time,
      },
      {
        model: Category,
      },
      {
        model: School,
      },
    ],
    where: { schoolId: id },
  });
  res.json(classes);
});

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
    const blogEntrys = await Blog.findAll({
      where: { schoolId: req.params.id },
    });
    res.json(blogEntrys);
  })
  .post(async (req, res) => {
    const newBook = await Blog.create(req.body);
    res.json(newBook);
  });

router.route("/:id").delete(async (req, res) => {
  try {
    await blog.destroy({ where: { id: req.params.id } });
    res.sendStatus(200);
  } catch (err) {
    console.error(err);
    res.sendStatus(500);
  }
});

//   .patch(async (req, res) => {
//     const bookId = req.params.id;
//     const { authtor, name, status } = req.body;
//     console.log('мы тут', req.body);
//     try {
//       const [updatedRowCount] = await blog.update(
//         { authtor, name, status },
//         { where: { id: bookId } },
//       );
//       if (updatedRowCount === 1) {
//         const bookEdit = await blog.findByPk(bookId);
//         console.log('мы тут', bookEdit);

//         // Обновление прошло успешно
//         return res.json(bookEdit);
//       }
//       // Нет записи для обновления или произошла другая ошибка
//       return res.sendStatus(403); // Например, можно отправить статус 404, если запись не найдена
//     } catch (error) {
//       console.error('Error editing book', error);
//       return res.sendStatus(500); // Ошибка сервера
//     }
//   });

module.exports = router;
