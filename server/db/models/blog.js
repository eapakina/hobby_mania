const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class Blog extends Model {
    static associate({ School }) {
      this.belongsTo(School, { foreignKey: "schoolId" });
    }
  }
  Blog.init(
    {
      title: DataTypes.STRING,
      body: DataTypes.TEXT,
      img: DataTypes.STRING,
      schoolId: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "Blog",
    }
  );
  return Blog;
};
