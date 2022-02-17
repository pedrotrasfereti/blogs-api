/* -======================= JOI =======================- */
const joi = require('joi');

/* -==================== MESSAGES =====================- */
const { request } = require('../../utils/messages');

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const loginSchema = joi.object({
  email: joi.string().min(1).pattern(emailPattern).required()
    .messages({
      'string.base': request.email.invalid,
      'string.min': request.email.empty,
      'string.pattern.base': request.email.invalid,
      'any.required': request.email.required,
    }),
  password: joi.string().min(1).required().messages({
    'string.base': request.password.invalid,
    'string.min': request.email.empty,
    'any.required': request.password.required,
  }),
});

const validateLogin = (body) => {
  const { error } = loginSchema.validate(body);
  if (error) throw error;
  return true;
};

module.exports = validateLogin;
