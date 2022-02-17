/* -======================= JOI =======================- */
const joi = require('joi');

/* -==================== MESSAGES =====================- */
const { category } = require('../../utils/messages');

const categorySchema = joi.object({
  name: joi.string().required().messages({
    'any.required': category.name.required,
  }),
});

const validateCategory = (body) => {
  const { error } = categorySchema.validate(body);
  if (error) throw error;
  return true;
};

module.exports = validateCategory;
