const { Category } = require('../models');
// const jwt = require('../middlewares/jwt/jwt');

const addCategory = async (name) => {
const result = await Category.create({ name });

  return { message: result };
};

// const getUser = async () => {
// const allUsers = await User.findAll({ attributes: { exclude: ['password'] } });
// return { type: null, message: allUsers };
// };

// const getUserById = async (id) => {
// const specificUser = await User.findByPk(id, { attributes: { exclude: ['password'] } });
// if (!specificUser) { return { type: '?', message: 'User does not exist' }; }
// return { type: null, message: specificUser };
// };

module.exports = {
    addCategory,
//   getUser,
//   getUserById,
};