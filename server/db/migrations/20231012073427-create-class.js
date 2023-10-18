/** @type {import(\'sequelize-cli\').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("Classes", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      className: {
        type: Sequelize.STRING,
      },
      age: {
        type: Sequelize.INTEGER,
      },
      description: {
        type: Sequelize.TEXT,
      },
      isAvailable: {
        type: Sequelize.BOOLEAN,
      },
      schoolId: {
        type: Sequelize.INTEGER,
        references: {
          model: "Schools",
          key: "id",
        },
        onDelete: "CASCADE",
      },
      categoryId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: "Categories",
          key: "id",
        },
      },
      dayId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: "Days",
          key: "id",
        },
      },
      timeId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: "Times",
          key: "id",
        },
      },

      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("Classes");
  },
};
