const express = require('express');
const { addCategory } = require('../controllers/category.controller');
const { hasToken } = require('../middlewares/jwt/jwt');

const categoriesRouter = express.Router();

categoriesRouter.post('/categories', hasToken, addCategory);

module.exports = categoriesRouter;