const options = {
  timestamps: false,
  tableName: 'PostsCategories',
};

module.exports = (sequelize, _DataTypes) => {
  const PostsCategory = sequelize.define('PostsCategory', {}, options);

  PostsCategory.associate = (models) => {
    models.BlogPost.belongsToMany(models.Category, {
      as: 'categories',
      through: PostsCategory,
      foreignKey: 'postId',
      otherKey: 'categoryId',
    });

    models.Category.belongsToMany(models.BlogPost, {
      as: 'posts',
      through: PostsCategory,
      foreignKey: 'categoryId',
      otherKey: 'postId',
    });
  };

  return PostsCategory;
};
