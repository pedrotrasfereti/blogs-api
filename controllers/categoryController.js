/* -====================== EXPRESS ======================- */
const categories = require('express').Router();
const rescue = require('express-rescue');

/* -==================== VALIDATIONS ====================- */
const validateCategory = require('./joi/categorySchema');

/* -====================== SERVICE ======================- */
const { categoryService } = require('../services');

/* -======================= UTILS =======================- */
const { HTTP_CREATED, HTTP_OK } = require('../utils/statusCodes');

/* -==================== MIDDLEWARES ====================- */
const { auth } = require('../middlewares');

const create = rescue(async (req, res) => {
  validateCategory(req.body);

  const { name } = req.body;

  const newCategory = await categoryService.create(name);

  return res.status(HTTP_CREATED).json(newCategory);
});

const findAll = rescue(async (_req, res) => {
  const result = await categoryService.findAll();

  return res.status(HTTP_OK).json(result);
});

/* POST /categories */
categories.post('/', [auth, create]);

/* GET /categories */
categories.get('/', [auth, findAll]);

module.exports = categories;
