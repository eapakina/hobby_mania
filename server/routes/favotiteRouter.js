const express = require('express');
const {
  Class, Favorite, Day, Time, Category, School
} = require('../db/models');

const router = express.Router();

router.get('/', async (req, res) => {
console.log("мы тут")
  try {
    console.log(req.session.userId)

    const allLikedClasses = await Favorite.findAll({
      include: [
        {
          model: Class,
        },
      ],
      where: { userId: req.session?.userId },
    });
    console.log(allLikedClasses)

    res.json(allLikedClasses);
  } catch (err) {
    console.log(err)
    res.sendStatus(500);
    
  }
});

router.post('/:id', async (req, res) => {
  try {
    const userId = req.session?.userId;
    console.log(req.session)
    // Проверяю, есть ли уже лайк от этого пользователя на этот класс
    const existingLike = await Favorite.findOne({
      where: {
        classId: Number(req.params.id),
        userId,
      },
    });
    if (!existingLike) {
      // Создал новый лайк
      await Favorite.create({
        classId: Number(req.params.id),
        userId,
      });
      res.sendStatus(200);
    } else {
      res.status(200).json({ message: 'Вы уже добавили этот курс в избранное' });
    }
  } catch (error) {
    console.error('Ошибка при обработке', error);
    res.status(500).json({ error: 'Ошибка при обработке' });
  }
});

router.delete('/:id', async (req, res) => {
  try {
    // Проверяю, есть ли лайк от этого пользователя на этот пост
    const existingLike = await Favorite.findOne({
      where: {
        classId: req.params.id,
        userId: req.session?.userId,
      },
    });

    if (existingLike) {
      await existingLike.destroy(); // Убираю лайк
      res.json({ message: 'Класс успешно удален' });
    } else {
      res
        .status(400)
        .json({ message: 'Вы еще не поставили лайк на этот класс' });
    }
  } catch (error) {
    console.error('Ошибка при удалении лайка:', error);
    res.status(500).json({ error: 'Ошибка при удалении лайка' });
  }
});

router.get('/aa/user', async (req, res) => {
    try {
      console.log(req.session.userId)
  
      const allLikedClasses = await Favorite.findAll({
        where: { userId: req.session?.userId },
        include: [
          {
            model: Class, include: [
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
              },]
          },

        ],
      });
      console.log(allLikedClasses)
  
      res.json(allLikedClasses);
    } catch (err) {
      console.log(err)

      res.sendStatus(500);
    }
  });
module.exports = router;
