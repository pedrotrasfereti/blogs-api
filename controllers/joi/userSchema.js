/* -======================= JOI =======================- */
const joi = require('joi');

/* -==================== MESSAGES =====================- */
const { request, user } = require('../../utils/messages');

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const userSchema = joi.object({
  displayName: joi.string().min(8).required().messages({
    'string.base': user.displayName.invalid,
    'string.min': user.displayName.invalid,
    'any.required': user.displayName.required,
  }),
  email: joi.string().pattern(emailPattern).required().messages({
    'string.base': request.email.invalid,
    'string.pattern.base': request.email.invalid,
    'any.required': request.email.required,
  }),
  password: joi.string().length(6).required().messages({
    'string.base': request.password.invalid,
    'string.length': request.password.invalid,
    'any.required': request.password.required,
  }),
  image: joi.string().messages({
    'string.base': user.image.invalid,
  }),
});

const validateUser = (body) => {
  const { error } = userSchema.validate(body);
  if (error) throw error;
  return true;
};

module.exports = validateUser;
