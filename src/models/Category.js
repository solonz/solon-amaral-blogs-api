module.exports = (sequelize, DataTypes) => {
  const Category = sequelize.define('Category', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    } 
  }, {
    underscored: true,
    tableName: 'categories',
    timestamps: true,
    modelName: 'Category',
  });
  return Category;
};