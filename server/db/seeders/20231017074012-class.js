"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("Classes", [
      {
        className: "Современные танцы",
        age: 4,
        description: "Хип-хоп для всех",
        isAvailable: true,
        schoolId: 1,
        categoryId: 1,
        dayId: 2,
        timeId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        className: "English for kids",
        age: 5,
        description: "Развивает навыки английского языка у детей",
        isAvailable: true,
        schoolId: 1,
        categoryId: 6,
        dayId: 3,
        timeId: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        className: "Балет для детей",
        age: 3,
        description:
          "Грация, невесомость, нежность и в то же время невероятная сила.Это всё классический танец.",
        isAvailable: true,
        schoolId: 1,
        categoryId: 3,
        dayId: 2,
        timeId: 3,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        className: "Шахматы",
        age: 5,
        description: "Развивает интеллект",
        isAvailable: true,
        schoolId: 2,
        categoryId: 4,
        dayId: 3,
        timeId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        className: "Каратэ",
        age: 3,
        description: "Развивает физическую форму",
        isAvailable: true,
        schoolId: 2,
        categoryId: 2,
        dayId: 1,
        timeId: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        className: "Рисование",
        age: 6,
        description: "Развивает творческие способности",
        isAvailable: true,
        schoolId: 3,
        categoryId: 5,
        dayId: 4,
        timeId: 3,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        className: "Музыкальная студия",
        age: 7,
        description: "Обучение игре на музыкальных инструментах",
        isAvailable: true,
        schoolId: 3,
        categoryId: 7,
        dayId: 5,
        timeId: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        className: "Театральная студия",
        age: 8,
        description: "Обучение актёрскому мастерству",
        isAvailable: true,
        schoolId: 3,
        categoryId: 8,
        dayId: 6,
        timeId: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        className: "Юный биолог",
        age: 9,
        description: "Изучение живой природы",
        isAvailable: true,
        schoolId: 4,
        categoryId: 10,
        dayId: 1,
        timeId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        className: "Юный астроном",
        age: 10,
        description: "Изучение космоса",
        isAvailable: true,
        schoolId: 4,
        categoryId: 11,
        dayId: 2,
        timeId: 3,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        className: "Математический кружок",
        age: 7,
        description: "Развитие математических способностей",
        isAvailable: true,
        schoolId: 5,
        categoryId: 12,
        dayId: 3,
        timeId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        className: "Юный программист",
        age: 8,
        description: "Обучение программированию",
        isAvailable: true,
        schoolId: 5,
        categoryId: 13,
        dayId: 4,
        timeId: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        className: "Юный химик",
        age: 9,
        description: "Изучение химии",
        isAvailable: true,
        schoolId: 5,
        categoryId: 14,
        dayId: 5,
        timeId: 3,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        className: "Юный физик",
        age: 10,
        description: "Изучение физики",
        isAvailable: true,
        schoolId: 5,
        categoryId: 15,
        dayId: 6,
        timeId: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        className: "Футбол",
        age: 8,
        description: "Играй в футбол и находи друзей",
        isAvailable: true,
        schoolId: 6,
        categoryId: 9,
        dayId: 1,
        timeId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        className: "Маленький художник",
        age: 5,
        description: "Изучение основ рисования и живописи",
        isAvailable: true,
        schoolId: 7,
        categoryId: 5,
        dayId: 2,
        timeId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        className: "Юный биолог",
        age: 9,
        description: "Изучение основ биологии",
        isAvailable: true,
        schoolId: 8,
        categoryId: 10,
        dayId: 3,
        timeId: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        className: "Маленький повар",
        age: 6,
        description: "Основы кулинарии для детей",
        isAvailable: true,
        schoolId: 9,
        categoryId: 16,
        dayId: 4,
        timeId: 3,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        className: "Юный математик",
        age: 7,
        description: "Основы математики",
        isAvailable: true,
        schoolId: 10,
        categoryId: 12,
        dayId: 5,
        timeId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        className: "Юный физик",
        age: 10,
        description: "Основы физики",
        isAvailable: true,
        schoolId: 11,
        categoryId: 15,
        dayId: 6,
        timeId: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        className: "Маленький писатель",
        age: 8,
        description: "Основы творческого письма",
        isAvailable: true,
        schoolId: 12,
        categoryId: 17,
        dayId: 1,
        timeId: 3,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
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

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};
