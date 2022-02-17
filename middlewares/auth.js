/* -====================== EXPRESS ======================- */
const rescue = require('express-rescue');

/* -====================== UTILS ======================- */
const jwt = require('../utils/jwt');
const { request } = require('../utils/messages');

/* -====================== SERVICE ======================- */
const userService = require('../services/userService');

/* -==================== VALIDATIONS ====================- */
const validateToken = require('../controllers/joi/tokenSchema');

const auth = rescue(async (req, res, next) => {
  const { authorization: token } = req.headers;

  validateToken({ token });

  try {
    const verifiedToken = jwt.verify(token);
    req.user = verifiedToken;

    const user = await userService.findByEmail(verifiedToken.email);
    req.user.id = user.id;

    next();
  } catch (err) {
    console.error(err);

    return res
      .status(401)
      .json({ message: request.token.invalid });
  }
});

module.exports = auth;
