/* -======================= UTILS =======================- */
const messages = require('../utils/messages');
const { HTTP_BAD_REQUEST } = require('../utils/statusCodes');

const verifyUpdate = async (req, res, next) => {
  if (req.body.categoryIds) {
    return res
      .status(HTTP_BAD_REQUEST)
      .json({ message: messages.post.editForbidden });
  }

  next();
};

module.exports = verifyUpdate;
