const express = require('express');
const { addUser, getUser, getUserById } = require('../controllers/user.controller');
const { hasToken } = require('../middlewares/jwt/jwt');
const { 
    validateDisplayName, 
    validateEmail, 
    validatePassword,
} = require('../middlewares/validations');

const userRouter = express.Router();

userRouter.post('/user', validateDisplayName, validateEmail, validatePassword, addUser);
userRouter.get('/user', hasToken, getUser);
userRouter.get('/user/:id', hasToken, getUserById);

module.exports = userRouter;