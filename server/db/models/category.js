const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Category extends Model {
    static associate({ Class }) {
      this.hasMany(Class, { foreignKey: 'categoryId' });
    }
  }
  Category.init(
    {
      category: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: 'Category',
    },
  );
  return Category;
};
