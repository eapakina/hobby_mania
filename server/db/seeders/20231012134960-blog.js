/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "Blogs",
      [
        {
          title: "Оригами: лист бумаги для творческого вдохновения",
          body: "Вырванный из тетради листок может напомнить о минутах из прошлого, воспоминаниями о которых вам захочется поделиться со своими детьми.",
          img: "https://posleurokov.ru/blog/wp-content/uploads/2020/03/origami-1308378-825x510.jpg",
          schoolId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "Как организовать детский праздник и выбрать аниматоров",
          body: "С появлением детей в семейном календаре появляются новые приятные и очень личные праздники — дни рождения. И если малышам до двух лет смысл этого дня еще не очень понятен, и родители празднуют важную дату на свое усмотрение, то начиная с трех лет дети уже способны озвучить собственные пожелания в отношении подарков, угощений и самого действа.",
          img: "https://posleurokov.ru/blog/wp-content/uploads/2020/11/kids-1331011_1280-825x510.jpg",
          schoolId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },

        {
          title: "Что такое детская импровизация?",
          body: "Каждый из нас хотя бы раз обращал внимание на забавного ребенка, который, играя, общается со своими игрушками, кормит их (причем точно зная, что каждая игрушка предпочитает на обед), смело берет на себя роль вымышленного персонажа и ведет диалог с ним, отвечая на вопросы и решая жизненные ситуации.",
          img: "https://posleurokov.ru/blog/wp-content/uploads/2020/10/pexels-polesie-toys-4491692-1-1-825x510.jpg",
          schoolId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },

        {
          title: "Левши, правши и амбидекстры",
          body: "В ходе эволюции человечество на 90% оказалось праворуким — благодаря необходимости производить требующую точности работу (труд создал человека, по утверждению одного из классиков марксизма) и развитию речевого центра, расположенного в соответствующем полушарии головного мозга. Животные не знают таких предпочтений, у них нет ведущих лап и крыльев.",
          img: "https://posleurokov.ru/blog/wp-content/uploads/2020/10/kelly-sikkema-PxxAXP1hVh8-unsplash-1-825x510.jpg",
          schoolId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "Ромео и Джульетта на карантине",
          body: "Как пишет семейный психолог Людмила Петрановская, совместный опыт преодоления трудностей сближает. При настигших же нас необычных обстоятельствах также внезапно становятся более близкими (и понятными) некоторые реалии прошлого, на которые мы раньше не обращали особого внимания, встретив упоминания их в текстах школьных учебников или классических произведений. К примеру — карантин.",
          img: "https://posleurokov.ru/blog/wp-content/uploads/2020/10/balcony-2984316_1280-825x510.jpg",
          schoolId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },

        {
          title: "Как понять, стоит ли отдать ребенка в театральную студию?",
          body: "В любом возрасте родителям сложно определить, на какие дополнительные занятия отдать ребенка, но для дошколят эта проблема стоит особенно остро.",
          img: "https://posleurokov.ru/blog/wp-content/uploads/2020/10/bFRxfhSZ_4x-1-825x510.jpg",
          schoolId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },

        {
          title: "Гигиена и стихи: моем руки в рифму",
          body: "Филолог из Санкт-Петербурга Денис Ахапкин посчитал, что выразительное чтение онегинской строфы занимает больше 20 секунд — именно столько, сколько рекомендуется тратить на мытье рук в современных эпидемиологических условиях. Это отличный повод для заучивания строф или повторения любимых пушкинских строчек.",
          img: "https://posleurokov.ru/blog/wp-content/uploads/2020/10/hands-4903050_1280-825x510.jpg",
          schoolId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "Записывать ли ребенка 5 лет в 5 кружков одновременно?",
          body: "Многие родители ждали начала осени, чтобы побывать на организационных собраниях всех заранее выбранных кружков для детей. Стоит ли заниматься несколькими направлениями параллельно? Разобраться поможет Наталья Трофимова, преподаватель педагогики и психологии, музыкальный руководитель и режиссер детского театра.",
          img: "https://posleurokov.ru/blog/wp-content/uploads/2020/09/angel-2906712-825x510.jpg",
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