const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class Day extends Model {
    static associate({ Shedule }) {
      this.hasMany(Shedule, { foreignKey: "timeId" });
    }
  }
  Day.init(
    {
      day: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Day",
    }
  );
  return Day;
};
