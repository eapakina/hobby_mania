const express = require('express');
const { Blog } = require('../db/models');

const router = express.Router();

router
  .route('/school/:id/')
  .get(async (req, res) => {
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
