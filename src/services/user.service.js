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

module.exports = {
  addUser,
};