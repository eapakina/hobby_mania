/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "Blogs",
      [
        {
          title: "что то",
          body: "первая новость",
          img: "",
          schoolId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },

        {
          title: "что то -2",
          body: "вторая новость",
          img: "",
          schoolId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },

        {
          title: "что то -2",
          body: "третья новость",
          img: "",
          schoolId: 1,
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
