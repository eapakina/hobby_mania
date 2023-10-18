/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "Categories",
      [
        { category: "Танцы", createdAt: new Date(), updatedAt: new Date() },
        { category: "Каратэ", createdAt: new Date(), updatedAt: new Date() },
        {
          category: "Художественная гимнастика",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        { category: "Шахматы", createdAt: new Date(), updatedAt: new Date() },
        { category: "Рисование", createdAt: new Date(), updatedAt: new Date() },
        {
          category: "Английский язык",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        { category: "Музыка", createdAt: new Date(), updatedAt: new Date() },
        { category: "Театр", createdAt: new Date(), updatedAt: new Date() },
        { category: "Футбол", createdAt: new Date(), updatedAt: new Date() },
        { category: "Биология", createdAt: new Date(), updatedAt: new Date() },
        {
          category: "Астрономия",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          category: "Математика",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          category: "Программирование",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        { category: "Химия", createdAt: new Date(), updatedAt: new Date() },
        { category: "Физика", createdAt: new Date(), updatedAt: new Date() },
        { category: "Кулинария", createdAt: new Date(), updatedAt: new Date() },
        {
          category: "Творчество",
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
