'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Comment extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({User}) {
      this.belongsTo(User, { foreignKey: 'idUser'});
      // define association here
    }
  }
  Comment.init({
    idUser: DataTypes.INTEGER,
    idSchool: DataTypes.INTEGER,
    title: DataTypes.STRING,
    body: DataTypes.TEXT,
  }, {
    sequelize,
    modelName: 'Comment',
  });
  return Comment;
};