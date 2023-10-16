const express = require('express');
const {
  Class, Day, Time, Category, School, Blog,
} = require('../db/models');

const router = express.Router();

router.get('/all', async (req, res) => {
  const classes = await Class.findAll();
  res.json(classes);
});

router.post('/:id/add', async (req, res) => {
  const {
    className, desription, category, day, time, isAvailable, age, schoolId,
  } = req.body;
  const { id } = req.params;
  console.log(req.params);
  const categoryId = await Category.findOne({ where: { category } });
  const dayId = await Day.findOne({ where: { day } });
  const timeId = await Time.findOne({ where: { time } });
  console.log(timeId.id, dayId.id, categoryId.id, schoolId, desription, age, isAvailable, className);
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
  res.json(newClass);
});

router
  .route('/school/:id/')
  .get(async (req, res) => {
    console.log('----------- get ------------');
    const blogEntrys = await Blog.findAll({ where: { schoolId: req.params.id } });
    res.json(blogEntrys);
  })
  .post(async (req, res) => {
    const newBook = await Blog.create(req.body);
    res.json(newBook);
  });

// router
//   .route('/:id')
//   .delete(async (req, res) => {
//     try {
//       await blog.destroy({ where: { id: req.params.id } });
//       res.sendStatus(200);
//     } catch (err) {
//       console.error(err);
//       res.sendStatus(500);
//     }
//   })

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
