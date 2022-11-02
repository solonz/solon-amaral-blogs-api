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

module.exports = {
    generateToken,
    validateToken,
};
