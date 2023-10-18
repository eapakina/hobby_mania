const express = require('express');
const { Op, Sequelize } = require('sequelize');
const { Class, Day, Time, Category, School, District } = require('../db/models');

const randomRouter = express.Router();

randomRouter.get('/', async (req, res) => {
  console.log('----------- get ------------');
  // Находим уникальные schoolId
  const classes = await Class.findAll({
    // group: ['schoolId', 'createdAt'],
    order: [[Sequelize.fn('RANDOM')]],
    limit: 10,
    include: [{ model: School }, { model: Day }, { model: Time }, { model: Category }],
  });
  // Затем для каждого уникального schoolId выбираем соответствующую запись
  // const classes = await Class.findAll({
  //   where: {
  //     schoolId: uniqueSchoolIds.map((entry) => entry.schoolId),
  //   },
  //   order: [['createdAt', 'DESC']],
  //   include: [{ model: School }, { model: Day },
  //     { model: Time },
  //     { model: Category }],
  // });

  res.json(classes);
});

randomRouter.post('/search/all', async (req, res) => {
  const { personName, timeName, districtName } = req.body;
  console.log(personName);
  const where = [
    {
      model: School,
    },
  ];
  if (personName.length === 0 && timeName.length === 0 && districtName.length === 0) {
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
  if (personName.length > 0) {
    where.push(
      {
        model: Category,
        where: {
          category: {
            [Op.in]: personName,
          },
        },
      },
      {
        model: Time,
      }
    );
  }

  if (timeName.length > 0) {
    where.push(
      {
        model: Time,
        where: {
          time: {
            [Op.in]: timeName,
          },
        },
      },
      {
        model: Category,
      }
    );
  }

  if (districtName.length > 0) {
    where[0] = {
      model: School,
      required: true,
      include: [
        {
          model: District,
          where: {
            district: {
              [Op.in]: districtName,
            },
          },
        },
      ],
    };
    where.push({
      model: Category,
    });
  }
  console.log(where);
  const classes = await Class.findAll({
    include: [
      {
        model: Day,
      },
      ...where,
    ],
  });
  res.json(classes);
});

module.exports = randomRouter;
