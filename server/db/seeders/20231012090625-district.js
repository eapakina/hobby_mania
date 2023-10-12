'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Districts', [
      {
        district: 'ВАО',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        district: 'ЗАО',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        district: 'ЮАО',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      
    ], {});
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
