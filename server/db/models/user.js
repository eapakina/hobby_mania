'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({Comment}) {
      this.hasMany(Comment, { foreignKey: 'idUser' });
      // define association here
    }
  }
  User.init({
    userName: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    img: DataTypes.TEXT,
  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};