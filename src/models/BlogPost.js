const BlogPostSchema = (sequelize, DataTypes) => {
  const BlogPost = sequelize.define('BlogPost', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    title: DataTypes.STRING,
    content: DataTypes.STRING,
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
  },
  {
    tableName: 'blog_posts',
    underscored: true,
    timestamps: false,
  })

  BlogPost.associate = (models) => {
    BlogPost.belongsTo(models.User, {
      as: 'user',
      foreignKey: 'userId'
    })
  }

  return BlogPost;
}

module.exports = BlogPostSchema;