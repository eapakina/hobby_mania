/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Schools', [
      {
        schoolName: 'Милград',
        adress: 'Москва,1-я Владимирская, 33/1, м. Перово',
        phone: 2222,
        email: 'milgradinfo@gmail.com',
        password: '123',
        info: 'Мы - очень классный центр',
        imgSchool: '//static.tildacdn.com/tild3233-6365-4532-b166-643233396232/10.jpg',
        districtId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),

      },

    ], {});
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
