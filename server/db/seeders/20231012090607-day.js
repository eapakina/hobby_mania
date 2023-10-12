/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "Days",
      [
        { day: "Monday", createdAt: new Date(), updatedAt: new Date() },
        { day: "Tuesday", createdAt: new Date(), updatedAt: new Date() },
        { day: "Wednesday", createdAt: new Date(), updatedAt: new Date() },
        { day: "Thursday", createdAt: new Date(), updatedAt: new Date() },
        { day: "Friday", createdAt: new Date(), updatedAt: new Date() },
        { day: "Saturday", createdAt: new Date(), updatedAt: new Date() },
        { day: "Sunday", createdAt: new Date(), updatedAt: new Date() },
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
