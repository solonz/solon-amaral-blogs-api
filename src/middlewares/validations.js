const jwt = require('./jwt/jwt');

const validateLogin = async (req, res, next) => {
    const { email, password } = req.body;

    if (!email || !password || email.length < 1 || password.length < 1) {
        return res.status(400).json({ message: 'Some required fields are missing' });
    }

    return next();
};

const validateToken = (token) => {
    if (!token) {
        const e = new Error('Token obrigatório!');
        e.name = 'Token obrigatório';
        throw e;
    }
    const user = jwt.validateToken(token);
    return user;
};

const validateDisplayName = async (req, res, next) => {
    const { displayName } = req.body;
  
    if (displayName.length < 8) {
      return res.status(400)
        .json({ message: '"displayName" length must be at least 8 characters long' });
    }
    return next();
  };

  const validateEmail = async (req, res, next) => {
    const { email } = req.body;
    const regex = /\S+@\S+\.\S+/;

    if (!email || !regex.test(email)) {
      return res.status(400).json({ message: '"email" must be a valid email' });
    }
  
    return next();
  };
  
  const validatePassword = async (req, res, next) => {
    const { password } = req.body;
  
    if (password.length < 6) {
      return res.status(400).json(
        { message: '"password" length must be at least 6 characters long' },
);
    }
  
    return next();
  };

module.exports = {
    validateLogin,
    validateToken,
    validateDisplayName,
    validateEmail,
    validatePassword,
};