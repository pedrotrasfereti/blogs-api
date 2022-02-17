/* -====================== SERVICES ======================- */
const { postService } = require('../services');

/* -======================= UTILS =======================- */
const messages = require('../utils/messages');
const { HTTP_UNAUTHORIZED } = require('../utils/statusCodes');

const verifyOwner = async (req, res, next) => {
  const { id: userId } = req.user;
  const { id: postId } = req.params;

  const post = await postService.findById(postId);

  if (post.userId !== userId) {
    return res
      .status(HTTP_UNAUTHORIZED)
      .json({ message: messages.request.unauthorized });
  }

  next();
};

module.exports = verifyOwner;
