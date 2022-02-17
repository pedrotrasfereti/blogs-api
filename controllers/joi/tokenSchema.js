/* -======================= JOI =======================- */
const joi = require('joi');

/* -==================== MESSAGES =====================- */
const { request } = require('../../utils/messages');

const tokenSchema = joi.object({
  token: joi.string().min(1).required().messages({
    'any.required': request.token.notFound,
    'string.min': request.token.notFound,
    'string.empty': request.token.notFound,
  }),
});

const validateToken = (body) => {
  const { error } = tokenSchema.validate(body);
  if (error) throw error;
  return true;
};

module.exports = validateToken;
