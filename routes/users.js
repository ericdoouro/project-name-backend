const express = require('express');

const {
  getCurrentUser,
  createUser,
  login,
} = require('../controllers/users');

const {
  validateSignup,
  validateSignin,
} = require('../middlewares/validation');

const auth = require('../middlewares/auth');

const router = express.Router();

router.get('/me', auth, getCurrentUser);
router.post('/signup', validateSignup, createUser);
router.post('/signin', validateSignin, login);

module.exports = router;