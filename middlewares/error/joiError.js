/* -======================= JOI =======================- */
const joi = require('joi');

/* -====================== UTILS ======================- */
const {
  HTTP_BAD_REQUEST,
  HTTP_UNAUTHORIZED,
} = require('../../utils/statusCodes');

module.exports = (err, _req, res, next) => {
  if (!joi.isError(err)) {
    return next(err);
  }

  const field = err.details[0].path[0];

  const status = field === 'token' ? HTTP_UNAUTHORIZED : HTTP_BAD_REQUEST;

  return res
    .status(status)
    .json({ message: err.details[0].message });
};
