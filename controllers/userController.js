/* -====================== EXPRESS ======================- */
const user = require('express').Router();
const rescue = require('express-rescue');

/* -==================== VALIDATIONS ====================- */
const validateUser = require('./joi/userSchema');

/* -====================== SERVICE ======================- */
const { userService } = require('../services');

/* -======================= UTILS =======================- */
const {
  HTTP_OK,
  HTTP_CREATED,
  HTTP_NO_CONTENT,
} = require('../utils/statusCodes');

/* -==================== MIDDLEWARES ====================- */
const { auth } = require('../middlewares');

const create = rescue(async (req, res) => {
  validateUser(req.body);

  const { displayName, email, password, image } = req.body;

  const token = await userService.create(
    displayName,
    email,
    password,
    image,
  );

  return res.status(HTTP_CREATED).json({ token });
});

const findAll = rescue(async (_req, res) => {
  const users = await userService.findAll();

  return res.status(HTTP_OK).json(users);
});

const findById = rescue(async (req, res) => {
  const { id: userId } = req.params;

  const result = await userService.findById(userId);

  return res.status(HTTP_OK).json(result);
});

/* DELETE /user/me */
const destroy = rescue(async (req, res) => {
  const { id: userId } = req.user;

  await userService.destroy(userId);

  return res.status(HTTP_NO_CONTENT).end();
});

/* POST /user */
user.post('/', create);

/* GET /user */
user.get('/', [
  auth,
  findAll,
]);

/* GET /user/:id */
user.get('/:id', [
  auth,
  findById,
]);

/* DELETE /user/me */
user.delete('/me', [
  auth,
  destroy,
]);

module.exports = user;
