const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class Schedule extends Model {
    static associate({ Day, Time, Class }) {
      this.belongsTo(Day, { foreignKey: "dayId" });
      this.belongsTo(Time, { foreignKey: "timeId" });
      this.belongsTo(Class, { foreignKey: "classId" });
    }
  }
  Schedule.init(
    {
      dayId: DataTypes.INTEGER,
      timeId: DataTypes.INTEGER,
      classId: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "Schedule",
    }
  );
  return Schedule;
};
