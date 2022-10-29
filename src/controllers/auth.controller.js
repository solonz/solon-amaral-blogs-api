const authService = require('../services/auth.service');

const userLogin = async (req, res) => {
  const { email, password } = req.body;

  const loginValidation = await authService.validateLogin(email, password);
  if (loginValidation.type) {
    return res.status(400).json({ message: loginValidation.message });
  }
  return res.status(200).json({ token: loginValidation });
};

module.exports = { 
    userLogin,
 };