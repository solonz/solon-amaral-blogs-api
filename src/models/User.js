module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
    },
    displayName: DataTypes.STRING,
    email: DataTypes.STRING, 
    password: DataTypes.STRING,
    image: DataTypes.STRING,
  }, {
    underscored: true,
    tableName: 'users',
    timestamps: true,
    modelName: 'User',
  });
  User.associate = (models) => {
    User.hasMany(models.BlogPost, {
      as: 'BlogPost',
      foreignKey: 'userId',
    })
  }
  return User;
};