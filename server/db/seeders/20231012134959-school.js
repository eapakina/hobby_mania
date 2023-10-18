/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "Schools",
      [
        {
          schoolName: "Милград",
          adress: "Москва,1-я Владимирская, 33/1, м. Перово",
          phone: 2222,
          email: "milgradinfo@gmail.com",
          password: "123",
          info: "Мы - очень классный центр",
          imgSchool:
            "//static.tildacdn.com/tild3233-6365-4532-b166-643233396232/10.jpg",
          districtId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },

        {
          schoolName: "Абабаб",
          adress: "Москва,1-я Владимирская, 33/1, м. Перово",
          phone: 2222,
          email: "milgradinfo@gmail.com",
          password: "123",
          info: "Мы - очень классный центр",
          imgSchool:
            "https://s0.bloknot-volgodonsk.ru/thumb/850x0xcut/upload/iblock/164/7piw0ihg3d2fhkpx55navkfff7zwlayf/qqPuhtDJCsU.jpg",
          districtId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          schoolName: "Клуб Почемучек",
          adress: "Москва, Симферопольский б-р, 19 корп.1",
          phone: 3333,
          email: "school3@gmail.com",
          password: "123",
          info: "We are a very cool center",
          imgSchool:
            "https://sailawaylearning.com/wp-content/uploads/2016/05/academy-home-page.jpg",
          districtId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          schoolName: "Азбука",
          adress: "ул. Лестева, д. 19, к.2, Москва",
          phone: 4444,
          email: "school4@gmail.com",
          password: "123",
          info: "We are a very cool center",
          imgSchool:
            "ihttps://mykaleidoscope.ru/x/uploads/posts/2022-09/1663168342_44-mykaleidoscope-ru-p-interesi-rebenka-emotsii-50.jpg",
          districtId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          schoolName: "Умный малыш",
          adress: "Малая Тульская ул., 7, Москва",
          phone: 5555,
          email: "school5@gmail.com",
          password: "123",
          info: "We are a very cool center",
          imgSchool:
            "https://sun9-50.userapi.com/c857624/v857624942/1fc2ad/fhzWS_mFS8c.jpg",
          districtId: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          schoolName: "Академия развития",
          adress: "1-й Рощинский пр-д, 4, корп. 1, Москва",
          phone: 6666,
          email: "school6@gmail.com",
          password: "123",
          info: "We are a very cool center",
          imgSchool:
            "https://www.thoughtco.com/thmb/hvktxPn9FqPYI956qwJBwG0YvZk%3D/1999x1332/filters:fill%28auto%2C1%29/GettyImages-83606706-5b1aa222ba617700373738eb.jpg",
          districtId: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          schoolName: "А+B",
          adress: "Орджоникидзе ул., 6, Москва",
          phone: 7777,
          email: "school7@gmail.com",
          password: "123",
          info: "We are a very cool center",
          imgSchool:
            "https://yutazy.ru/images/uploads/news/2019/8/25/d68c7ac4e6e2a21dfae47f4ba61e031f.jpg",
          districtId: 4,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          schoolName: "А+B",
          adress: "ул. Винокурова, 4, корп. 2, Москва",
          phone: 8888,
          email: "school8@gmail.com",
          password: "123",
          info: "We are a very cool center",
          imgSchool:
            "https://gas-kvas.com/uploads/posts/2023-01/1673533252_gas-kvas-com-p-risunki-dlya-detskogo-sada-dlya-gruppi-33.jpg",
          districtId: 4,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          schoolName: "Маленький гений",
          adress: " Стасовой ул., 4, Москва",
          phone: 9999,
          email: "school9@gmail.com",
          password: "123",
          info: "We are a very cool center",
          imgSchool:
            "https://top-fon.com/uploads/posts/2023-02/1675207692_top-fon-com-p-odarennie-deti-fon-prezentatsii-4.jpg.jpg",
          districtId: 5,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          schoolName: "ЯСАМ",
          adress: " Ленинский пр-т., 45, Москва",
          phone: 101010,
          email: "school10@gmail.com",
          password: "123",
          info: "We are a very cool center",
          imgSchool:
            "http://cdn3.vectorstock.com/i/1000x1000/73/42/cartoon-child-vector-10537342.jpg",
          districtId: 5,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          schoolName: "Маленькая страна",
          adress: "ул. Шверника, 17к1, Москва",
          phone: 111111,
          email: "school11@gmail.com",
          password: "123",
          info: "We are a very cool center",
          imgSchool:
            "https://psy-files.ru/wp-content/uploads/2/8/6/28690c67160bec8ee2cec67d5efbe95e.jpg",
          districtId: 6,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          schoolName: "Академия детства",
          adress: "Ленинский пр-т., 68, Москва",
          phone: 121212,
          email: "school12@gmail.com",
          password: "123",
          info: "We are a very cool center",
          imgSchool:
            "https://www.osnmedia.ru/wp-content/uploads/2021/08/ne-zhelanie-hodit-v-shkolu-ili-v-sekcziyu.jpg",
          districtId: 6,
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
