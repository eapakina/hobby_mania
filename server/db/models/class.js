const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class Class extends Model {
    static associate({ School, Category, Day, Time, Shedule }) {
      this.belongsTo(School, { foreignKey: "schoolId" });
      this.belongsTo(Category, { foreignKey: "categoryId" });
      this.belongsTo(Day, { foreignKey: "dayId" });
      this.belongsTo(Time, { foreignKey: "timeId" });
      this.hasMany(Shedule, { foreignKey: "classId" });
    }
  }

  Class.init(
    {
      age: DataTypes.INTEGER,
      desription: DataTypes.TEXT,
      isAvailable: DataTypes.BOOLEAN,
      schoolId: DataTypes.INTEGER,
      categoryId: DataTypes.INTEGER,
      dayId: DataTypes.INTEGER,
      timeId: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "Class",
    }
  );
  return Class;
};
