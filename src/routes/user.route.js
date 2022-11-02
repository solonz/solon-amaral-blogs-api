const express = require('express');
const { addUser } = require('../controllers/user.controller');
const { 
    validateDisplayName, 
    validateEmail, 
    validatePassword, 
} = require('../middlewares/validations');

const userRouter = express.Router();

userRouter.post('/user', validateDisplayName, validateEmail, validatePassword, addUser);

module.exports = userRouter;