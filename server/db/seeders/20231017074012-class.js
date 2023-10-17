'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {    await queryInterface.bulkInsert('Classes', [
    {
      className: 'Современные танцы',
      age: 4,
      desription: 'Хип-хоп для всех',
      isAvailable: true,
      schoolId: 1,
      categoryId: 1,
      dayId: 2,
      timeId: 1,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      className: 'English for kids',
      age: 5,
      desription: 'Если Вы хотите чтобы Ваш ребёнок не боялся говорить на английском, с легкостью выполнял домашнее задание а также изучал язык с помощью разнообразного интерактива (игры, песни и и.д.), то наш английский именно для Вас. 45 минут продуктивного занятия и ваш ребёнок сможет заполнить все пробелы в знаниях или же выучить язык с нуля. ',
      isAvailable: true,
      schoolId: 1,
      categoryId: 6,
      dayId: 3,
      timeId:2,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      className: 'Балет для детей',
      age: 3,
      desription: 'Грация, невесомость, нежность и в то же время невероятная сила.Это всё классический танец.',
      isAvailable: true,
      schoolId: 1,
      categoryId: 1,
      dayId: 2,
      timeId:3,

      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      className: 'Шахматы',
      age: 5,
      desription: 'Развивает интеллект',
      isAvailable: true,
      schoolId: 2,
      categoryId: 2,
      dayId: 3,
      timeId:1,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      className: 'Каратэ',
      age: 3,
      desription: 'Развивает физическую форму',
      isAvailable: true,
      schoolId: 2,
      categoryId: 2,
      dayId: 1,
      timeId: 2,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
  ])
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
