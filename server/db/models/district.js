'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class District extends Model {
    static associate({School}) {
      this.hasMany(School, { foreignKey: "districtId" });
    }
  }
  District.init({
    district: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'District',
  });
  return District;
};