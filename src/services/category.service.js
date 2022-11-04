const { Category } = require('../models');
// const jwt = require('../middlewares/jwt/jwt');

const addCategory = async (name) => {
const result = await Category.create({ name });

  return { message: result };
};

const getCategory = async () => {
const allCategories = await Category.findAll();
return { type: null, message: allCategories };
};

// const getUserById = async (id) => {
// const specificUser = await User.findByPk(id, { attributes: { exclude: ['password'] } });
// if (!specificUser) { return { type: '?', message: 'User does not exist' }; }
// return { type: null, message: specificUser };
// };

module.exports = {
    addCategory,
    getCategory,
//   getUserById,
};