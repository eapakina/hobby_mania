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
    static associate({User,School}) {
      this.belongsTo(User, { foreignKey: 'userId'});
      this.belongsTo(School, { foreignKey: 'schoolId'});
      // define association here
    }
  }
  Comment.init({
    userId: DataTypes.INTEGER,
    schoolId: DataTypes.INTEGER,
    title: DataTypes.STRING,
    body: DataTypes.TEXT,
  }, {
    sequelize,
    modelName: 'Comment',
  });
  return Comment;
};