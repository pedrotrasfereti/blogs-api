/* -====================== ERRORS ======================- */
const { ConflictError, NotFoundError } = require('./errors');

/* -====================== TOKEN ======================- */
const jwt = require('../utils/jwt');

/* -====================== MODELS ======================- */
const { User } = require('../models');

/* -==================== MESSAGES =====================- */
const messages = require('../utils/messages');

const create = async (displayName, email, password, image) => {
  const exists = await User.findOne({ where: { email } });

  if (exists) throw new ConflictError();

  await User.create({
    displayName,
    email,
    password,
    image,
  });

  const token = jwt.sign({ displayName });
  return token;
};

const findAll = async () => {
  const users = await User.findAll();

  return users.map((user) => user.dataValues);
};

const findByEmail = async (email) => {
  const user = await User.findOne({ where: { email } });

  return user.dataValues;
};

const findById = async (id) => {
  const user = await User.findOne({ where: { id } });

  if (!user) throw new NotFoundError(messages.user.notFound);

  return user.dataValues;
};

const destroy = async (id) => {
  await User.destroy({ where: { id } });
};

module.exports = {
  create,
  findAll,
  findByEmail,
  findById,
  destroy,
};
