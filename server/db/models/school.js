const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class School extends Model {
    static associate({ District, Class, Blog }) {
      this.belongsTo(District, { foreignKey: "districtId" });
      this.hasMany(Class, { foreignKey: "schoolId" });
      this.hasMany(Blog, { foreignKey: "schoolId" });
    }
  }
  School.init(
    {
      schoolName: DataTypes.STRING,
      adress: DataTypes.STRING,
      phone: DataTypes.INTEGER,
      email: DataTypes.STRING,
      password: DataTypes.STRING,
      info: DataTypes.TEXT,
      img: DataTypes.STRING,
      districtId: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "School",
    }
  );
  return School;
};
