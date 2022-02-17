require('dotenv').config();

const config = {
  username: process.env.MYSQL_USER,
  password: process.env.MYSQL_PASSWORD,
  host: process.env.HOSTNAME,
  database: 'blogs_api',
  dialect: 'mysql',
};

module.exports = {
  development: config,
  test: config,
  production: config,
};
