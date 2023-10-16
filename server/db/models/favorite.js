const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Favorite extends Model {
    static associate({ User, Class }) {
      this.belongsTo(User, { foreignKey: 'userId' });
      this.belongsTo(Class, { foreignKey: 'classId' });
    }

    static associate(models) {
      // define association here
    }
  }
  Favorite.init({
    userId: DataTypes.INTEGER,
    classId: DataTypes.INTEGER,
  }, {
    sequelize,
    modelName: 'Favorite',
  });
  return Favorite;
};
