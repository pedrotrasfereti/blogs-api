const auth = require('./auth');
const joiError = require('./error/joiError');
const domainError = require('./error/domainError');
const serverError = require('./error/serverError');
const verifyCategories = require('./verifyCategories');
const verifyUpdate = require('./verifyUpdate');
const verifyOwner = require('./verifyOwner');
const verifyPost = require('./verifyPost');

module.exports = {
  auth,
  joiError,
  domainError,
  serverError,
  verifyCategories,
  verifyUpdate,
  verifyOwner,
  verifyPost,
};
