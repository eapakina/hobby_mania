/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "Times",
      [
        {
          time: "Утро",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          time: "День",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          time: "Вечер",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
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
