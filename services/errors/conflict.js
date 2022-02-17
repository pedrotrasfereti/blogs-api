/* -====================== UTILS ======================- */
const { user } = require('../../utils/messages');
const { HTTP_CONFLICT } = require('../../utils/statusCodes');

class ConflictError {
  constructor() {
    this.message = user.conflict;
    this.code = HTTP_CONFLICT;
  }
}

module.exports = ConflictError;