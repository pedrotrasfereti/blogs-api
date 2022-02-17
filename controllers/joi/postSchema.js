/* -======================= JOI =======================- */
const joi = require('joi');

/* -==================== MESSAGES =====================- */
const { post } = require('../../utils/messages');

const postSchema = joi.object({
  title: joi.string().min(1).required().messages({
    'string.base': post.title.invalid,
    'any.required': post.title.required,
  }),
  content: joi.string().required().messages({
    'string.base': post.content.invalid,
    'any.required': post.content.required,
  }),
  categoryIds: joi.array().items(joi.number()).min(1).required()
    .messages({
      'array.base': post.categoryIds.invalid,
      'array.items.base': post.categoryIds.invalid,
      'array.min': post.categoryIds.empty,
      'any.required': post.categoryIds.required,
    }),
});

const postUpdateSchema = joi.object({
  title: joi.string().min(1).required().messages({
    'string.base': post.title.invalid,
    'any.required': post.title.required,
  }),
  content: joi.string().required().messages({
    'string.base': post.content.invalid,
    'any.required': post.content.required,
  }),
});

const validatePost = (body) => {
  const { error } = postSchema.validate(body);
  if (error) throw error;
  return true;
};

const validateUpdate = (body) => {
  const { error } = postUpdateSchema.validate(body);
  if (error) throw error;
  return true;
};

module.exports = {
  validatePost,
  validateUpdate,
};
