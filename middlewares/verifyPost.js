/* -====================== EXPRESS ======================- */
const rescue = require('express-rescue');

/* -====================== SERVICES ======================- */
const { postService } = require('../services');

const verifyPost = rescue(async (req, _res, next) => {
  const { id: postId } = req.params;

  await postService.findById(postId);

  next();
});

module.exports = verifyPost;
