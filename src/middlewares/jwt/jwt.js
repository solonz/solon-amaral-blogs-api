require('dotenv/config');
const jwt = require('jsonwebtoken');

const generateToken = (data, id) => {
    const token = jwt.sign({ data, id }, process.env.JWT_SECRET, {
        expiresIn: '1d',
        algorithm: 'HS256',
    });
    return token;
};

const validateToken = (token) => {
    try {
        const { data } = jwt.verify(token, process.env.JWT_SECRET);
        return data;
    } catch (error) {
        const e = new Error('Token inválido');
        e.name = 'Inválido';
        throw e;
    }
};

const hasToken = async (req, res, next) => {
  const { authorization } = req.headers;

  if (!authorization) {
    return res.status(401).json({ message: 'Token not found' });
  }

  try {
    jwt.verify(authorization, process.env.JWT_SECRET);
    return next();
  } catch (error) {
    next(res.status(401).json({ message: 'Expired or invalid token' }));
  }
};

module.exports = {
    generateToken,
    validateToken,
    hasToken,
};
