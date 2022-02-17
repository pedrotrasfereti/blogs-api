/* -====================== UTILS ======================- */
const {
  HTTP_INTERNAL_SERVER_ERROR,
} = require('../../utils/statusCodes');

module.exports = (err, _req, res, _next) => {
  console.error(err);

  return res
    .status(HTTP_INTERNAL_SERVER_ERROR)
    .json({ message: 'internal server error' });
};
