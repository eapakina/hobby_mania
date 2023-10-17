/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Schools', [
      {
        schoolName: 'Милград',
        adress: 'Москва,1-я Владимирская, 33/1, м. Перово',
        phone: 89688710974,
        email: 'milgradinfo@gmail.com',
        password: '123',
        info: 'Занятия проходят в новом просторном отремонтированном помещении, где Ваш ребенок будет находиться в комфорте под присмотром педагога и администрации',
        imgSchool: '//static.tildacdn.com/tild3233-6365-4532-b166-643233396232/10.jpg',
        districtId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),

      },

      {
        schoolName: 'Крошка Енот',
        adress: 'Москва,1-я Владимирская, 33/1, м. Перово',
        phone: 89258663171 ,
        email: 'kroshka@gmail.com',
        password: '123',
        info: 'В детском клубе «Крошка Енот» на территории парка «Перовский» проходят развивающие занятие',
        imgSchool: 'https://perovskiy-park.ru/upload/IMG_0556.jpg',
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
