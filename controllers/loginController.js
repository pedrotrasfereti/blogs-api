/* -====================== EXPRESS ======================- */
const login = require('express').Router();
const rescue = require('express-rescue');

/* -==================== VALIDATIONS ====================- */
const validateLogin = require('./joi/loginSchema');

/* -====================== SERVICE ======================- */
const { loginService } = require('../services');

/* -====================== UTILS ======================- */
const { HTTP_OK } = require('../utils/statusCodes');

const post = rescue(async (req, res) => {
  validateLogin(req.body);

  const { email, password } = req.body;

  const token = await loginService.login(email, password);

  return res.status(HTTP_OK).json({ token });
});

/* POST /login */
login.post('/', post);

module.exports = login;
