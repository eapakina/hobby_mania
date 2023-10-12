/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      'Categories',
      [
        { category: 'Танцы', createdAt: new Date(), updatedAt: new Date() },
        { category: 'Каратэ', createdAt: new Date(), updatedAt: new Date() },
        {
          category: 'Художественная гимнастика',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        { category: 'Шахматы', createdAt: new Date(), updatedAt: new Date() },
        { category: 'Рисование', createdAt: new Date(), updatedAt: new Date() },
        {
          category: 'Английский язык',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        { category: 'Музыка', createdAt: new Date(), updatedAt: new Date() },
        { category: 'Театр', createdAt: new Date(), updatedAt: new Date() },
        { category: 'Футбол', createdAt: new Date(), updatedAt: new Date() },
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
