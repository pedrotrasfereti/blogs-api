/* -====================== UTILS ======================- */
const { request } = require('../../utils/messages');
const { HTTP_BAD_REQUEST } = require('../../utils/statusCodes');

class InvalidFieldsError {
  constructor() {
    this.message = request.invalid;
    this.code = HTTP_BAD_REQUEST;
  }
}

module.exports = InvalidFieldsError;