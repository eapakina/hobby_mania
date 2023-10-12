const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Time extends Model {
    static associate({ Class, Shedule }) {
      this.hasMany(Shedule, { foreignKey: 'timeId' });
      this.hasMany(Class, { foreignKey: 'timeId' });
    }
  }

  Time.init({
    time: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'Time',
  });
  return Time;
};
