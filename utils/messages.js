/* Fields show up in different request bodies */
const request = {
  invalid: 'Invalid fields',
  unauthorized: 'Unauthorized user',
  email: {
    invalid: '"email" must be a valid email',
    required: '"email" is required',
    empty: '"email" is not allowed to be empty',
  },
  password: {
    invalid: '"password" length must be 6 characters long',
    required: '"password" is required',
    empty: '"password" is not allowed to be empty',
  },
  token: {
    notFound: 'Token not found',
    invalid: 'Expired or invalid token',
  },
};

/* Model exclusive fields */
const user = {
  notFound: 'User does not exist',
  conflict: 'User already registered',
  displayName: {
    invalid: '"displayName" length must be at least 8 characters long',
    required: '"displayName" is required',
  },
  image: {
    invalid: '"image" must be of type string',
  },
};

const category = {
  name: {
    required: '"name" is required',
  },
};

const post = {
  notFound: 'Post does not exist',
  editForbidden: 'Categories cannot be edited',
  title: {
    invalid: '"title" is invalid',
    required: '"title" is required',
  },
  content: {
    invalid: '"content" must be of type string',
    required: '"content" is required',
  },
  categoryIds: {
    invalid: '"categoryIds" must be an array of numbers',
    required: '"categoryIds" is required',
    empty: '"categoryIds" is not allowed to be empty',
    notFound: '"categoryIds" not found',
  },
};

module.exports = {
  request,
  user,
  category,
  post,
};
