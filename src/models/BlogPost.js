module.exports = (sequelize, DataTypes) => {
  const BlogPost = sequelize.define('BlogPost', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false,
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    }, 
    content: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    userId: {
      primaryKey: true,
      type: DataTypes.INTEGER,
    },
    published: {
      type: DataTypes.DATE,
      defaultValue: new Date()
    },
    updated: {
      type: DataTypes.DATE,
      defaultValue: new Date()
    }, 
  }, {
    underscored: true,
    tableName: 'blog_posts',
    timestamps: true,
    modelName: 'BlogPost',
  });

  BlogPost.associate = (models) => {
    BlogPost.belongsTo(models.User, {
      as: 'user',
      foreignKey: 'userId'
    })
  };
  return BlogPost;
};