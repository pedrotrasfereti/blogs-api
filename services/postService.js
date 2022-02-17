/* -====================== SEQUELIZE ======================- */
const { Op: operators } = require('sequelize');

/* -====================== ERRORS ======================- */
const { NotFoundError } = require('./errors');

/* -====================== MODELS ======================- */
const { BlogPost, User, Category } = require('../models');

/* -==================== MESSAGES =====================- */
const messages = require('../utils/messages');

// Options
const associationOption = [
  {
    model: User,
    as: 'user',
    attributes: { exclude: ['password'] },
  },
  {
    model: Category,
    as: 'categories',
    through: { attributes: [] },
  },
];

const create = async (title, content, userId) => {
  const newPost = await BlogPost.create({
    title,
    content,
    userId,
  });

  return {
    id: newPost.id,
    title: newPost.title,
    content: newPost.content,
    userId,
  };
};

const findAll = async () => {
  const posts = await BlogPost.findAll({
    attributes: { exclude: ['UserId'] },
    include: associationOption,
  });

  return posts.map((c) => c.dataValues);
};

const findById = async (id) => {
  const post = await BlogPost.findByPk(id, {
    include: associationOption,
  });

  if (!post) throw new NotFoundError(messages.post.notFound);

  return post;
};

const update = async (id, title, content) => {
  await BlogPost.update(
    { title, content },
    { where: { id } },
  );

  const updatedPost = await BlogPost.findByPk(id, {
    include: {
      model: Category, as: 'categories', through: { attributes: [] },
    },
  });

  return updatedPost;
};

const destroy = async (id) => {
  await BlogPost.destroy({ where: { id } });
};

const search = async (searchTerm) => {
  const result = await BlogPost.findAll({
    include: associationOption,
    where: {
      [operators.or]: [
        {
          title: { [operators.like]: `%${searchTerm}%` },
        },
        {
          content: { [operators.like]: `%${searchTerm}%` },
        },
      ],
    },
  });

  return result;
};

module.exports = {
  create,
  findAll,
  findById,
  update,
  destroy,
  search,
};
