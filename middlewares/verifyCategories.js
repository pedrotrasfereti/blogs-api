/* -====================== SERVICES ======================- */
const { categoryService } = require('../services');

/* -======================= UTILS =======================- */
const checkCategories = require('../utils/checkCategories');
const { post } = require('../utils/messages');
const { HTTP_BAD_REQUEST } = require('../utils/statusCodes');

const verifyCategories = async (req, res, next) => {
  const { categoryIds } = req.body;

  if (!categoryIds) {
    return res
      .status(HTTP_BAD_REQUEST)
      .json({ message: post.categoryIds.required });
  }

  const categories = await categoryService.findAll();
  const result = checkCategories(categories, categoryIds);

  if (!result) {
    return res
      .status(HTTP_BAD_REQUEST)
      .json({ message: post.categoryIds.notFound });
  }

  next();
};

module.exports = verifyCategories;
