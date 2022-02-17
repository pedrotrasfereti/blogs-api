/* -====================== ERRORS ======================- */
const { InvalidFieldsError } = require('./errors');

/* -====================== TOKEN ======================- */
const jwt = require('../utils/jwt');

/* -====================== MODELS ======================- */
const { User } = require('../models');

const login = async (email, password) => {
  const user = await User.findOne({ where: { email } });

  if (!user) throw new InvalidFieldsError();
  if (password !== user.password) throw new InvalidFieldsError();

  const token = jwt.sign({ email });

  return token;
};

module.exports = {
  login,
};
