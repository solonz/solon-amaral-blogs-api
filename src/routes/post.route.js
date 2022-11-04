const express = require('express');
const { getPost } = require('../controllers/post.controller');
const { hasToken } = require('../middlewares/jwt/jwt');
// const { validatePost } = require('../middlewares/validations');

const postRouter = express.Router();

// postRouter.post('/post', hasToken, validatePost, addPost);
postRouter.get('/post', hasToken, getPost);

module.exports = postRouter;