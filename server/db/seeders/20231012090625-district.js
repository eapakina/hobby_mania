/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      'Districts',
      [
        {
          district: 'ВАО',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          district: 'ЗАО',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          district: 'ЮАО',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          district: 'САО',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          district: 'СВАО',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          district: 'ЦАО',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          district: 'ЮЗАО',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          district: 'ЮВАО',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          district: 'СЗАО',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          district: 'НАО',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          district: 'ТАО',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {},
    );
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
