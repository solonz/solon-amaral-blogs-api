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

module.exports = {
    validateLogin,
    validateToken,
};