const { BlogPost, User, Category } = require('../models');
// const jwt = require('../middlewares/jwt/jwt');

// const addPost = async ({ title, content, categoryIds }) => {
//   const { dataValues } = await BlogPost.create({
//     // userId: id,
//     title,
//     content,
//     categoryIds,
//   });

//   const data = categoryIds.map((categoryId) =>
//     PostCategory.create({ postId: dataValues.id, categoryId }));

//   await Promise.all(data);

//   return dataValues;
// };
  // const { title, content, categoryIds } = req.body;
  // const { id } = req.user;
  //   const result = await BlogPost.create({ userId: id, title, content, categoryIds });
  //   const categCreate = await categoryIds.map((e) => PostCategory.create({ postId: result.id, e }));
  //   await Promise.all(categCreate);

  // return result;

  const getPost = async () => {
    const result = await BlogPost.findAll({
        include: [
            { model: User, as: 'user', attributes: { exclude: ['password'] } },
            { model: Category, as: 'categories' },
        ],
    });
    return { status: 200, message: result }; 
  };
// const getUserById = async (id) => {
// const specificUser = await User.findByPk(id, { attributes: { exclude: ['password'] } });
// if (!specificUser) { return { type: '?', message: 'User does not exist' }; }
// return { type: null, message: specificUser };
// };

module.exports = {
    // addPost,
    getPost,
};