const express = require('express');
const { addUser, getUser } = require('../controllers/user.controller');
const { hasToken } = require('../middlewares/jwt/jwt');
const { 
    validateDisplayName, 
    validateEmail, 
    validatePassword,
} = require('../middlewares/validations');

const userRouter = express.Router();

userRouter.post('/user', validateDisplayName, validateEmail, validatePassword, addUser);
userRouter.get('/user', hasToken, getUser);

module.exports = userRouter;