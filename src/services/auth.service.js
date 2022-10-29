const { User } = require('../models');
const jwt = require('../middlewares/jwt/jwt');

const validateLogin = async (email, password) => {
  const user = await User.findOne({ where: { email } });

  if (!user || user.password !== password) {
    return { type: 'error', message: 'Invalid fields' };
  }

  const token = jwt.generateToken(email, user.id);

  return token;
};

module.exports = {
  validateLogin,
};