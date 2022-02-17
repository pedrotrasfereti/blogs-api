/* -====================== EXPRESS ======================- */
const post = require('express').Router();
const rescue = require('express-rescue');

/* -==================== VALIDATIONS ====================- */
const {
  validatePost,
  validateUpdate,
} = require('./joi/postSchema');

/* -====================== SERVICE ======================- */
const { postService } = require('../services');

/* -======================= UTILS =======================- */
const {
  HTTP_CREATED,
  HTTP_OK,
  HTTP_NO_CONTENT,
} = require('../utils/statusCodes');

/* -==================== MIDDLEWARES ====================- */
const {
  auth,
  verifyCategories,
  verifyUpdate,
  verifyOwner,
  verifyPost,
} = require('../middlewares');

/* POST /post */
const create = rescue(async (req, res) => {
  validatePost(req.body);

  const { title, content } = req.body;
  const userId = req.user.id;

  const newPost = await postService.create(
    title,
    content,
    userId,
  );

  return res.status(HTTP_CREATED).json(newPost);
});

/* GET /post */
const findAll = rescue(async (_req, res) => {
  const posts = await postService.findAll();

  return res.status(HTTP_OK).json(posts);
});

/* GET /post/:id */
const findById = rescue(async (req, res) => {
  const { id } = req.params;

  const result = await postService.findById(id);

  return res.status(HTTP_OK).json(result);
});

/* PUT /post/:id */
const update = rescue(async (req, res) => {
  validateUpdate(req.body);

  const { id: postId } = req.params;
  const { title, content } = req.body;

  const updatedPost = await postService.update(
    postId,
    title,
    content,
  );

  return res.status(HTTP_OK).json(updatedPost);
});

/* DELETE /post/:id */
const destroy = rescue(async (req, res) => {
  const { id: postId } = req.params;

  await postService.destroy(postId);

  return res.status(HTTP_NO_CONTENT).end();
});

/* GET /post/search?q=:searchTerm */
const search = rescue(async (req, res) => {
  const { q: searchTerm } = req.query;

  const result = await postService.search(searchTerm);

  res.status(HTTP_OK).send(result);
});

/* GET /post/search?q=:searchTerm */
post.get(
  '/search',
  [
    auth,
    search,
  ],
);

/* POST /post */
post.post(
  '/',
  [
    auth,
    verifyCategories,
    create,
  ],
);

/* GET /post */
post.get(
  '/',
  [
    auth,
    findAll,
  ],
);

/* GET /post/:id */
post.get(
  '/:id',
  [
    auth,
    findById,
  ],
);

/* PUT /post/:id */
post.put(
  '/:id',
  [
    auth,
    verifyUpdate,
    verifyOwner,
    update,
  ],
);

/* DELETE /post/:id */
post.delete(
  '/:id',
  [
    auth,
    verifyPost,
    verifyOwner,
    destroy,
  ],
);

module.exports = post;
