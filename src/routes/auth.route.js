const express = require('express');
const { userLogin } = require('../controllers/auth.controller');
const { validateLogin } = require('../middlewares/validations');

const router = express.Router();

router.post('/', validateLogin, userLogin);

module.exports = router;