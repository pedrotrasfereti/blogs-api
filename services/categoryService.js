/* -====================== MODELS ======================- */
const { Category } = require('../models');

const create = async (name) => {
  const newCategory = await Category.create({ name });

  return newCategory.dataValues;
};

const findAll = async () => {
  const categories = await Category.findAll();

  return categories.map((c) => c.dataValues);
};

module.exports = {
  create,
  findAll,
};
