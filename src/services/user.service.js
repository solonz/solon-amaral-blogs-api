const { User } = require('../models');
const jwt = require('../middlewares/jwt/jwt');

const addUser = async ({ displayName, email, password, image }) => {
  const checkEmail = await User.findOne({ where: { email } });
  console.log(checkEmail);
  if (checkEmail) {
 return { type: 'error', message: 'User already registered' }; 
}
  await User.create({ displayName, email, password, image });

  const token = jwt.generateToken(email);

  return { type: null, message: token };
};

const getUser = async () => {
const allUsers = await User.findAll({ attributes: { exclude: ['password'] } });
return { type: null, message: allUsers };
};

const getUserById = async (id) => {
const specificUser = await User.findByPk(id, { attributes: { exclude: ['password'] } });
if (!specificUser) { return { type: '?', message: 'User does not exist' }; }
return { type: null, message: specificUser };
};

module.exports = {
  addUser,
  getUser,
  getUserById,
};