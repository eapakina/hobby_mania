const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class Day extends Model {
    static associate({ Schedule }) {
      this.hasMany(Schedule, { foreignKey: "timeId" });
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
