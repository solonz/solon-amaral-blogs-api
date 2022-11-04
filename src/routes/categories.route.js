const express = require('express');
const { addCategory, getCategory } = require('../controllers/category.controller');
const { hasToken } = require('../middlewares/jwt/jwt');

const categoriesRouter = express.Router();

categoriesRouter.post('/categories', hasToken, addCategory);
categoriesRouter.get('/categories', hasToken, getCategory);

module.exports = categoriesRouter;