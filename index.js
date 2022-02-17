/* -====================== EXPRESS ======================- */
const express = require('express');

/* -==================== ENVIRONMENT ====================- */
require('dotenv').config();

/* -==================== MIDDLEWARES ====================- */
const bodyParser = require('body-parser');
const { joiError, serverError, domainError } = require('./middlewares');

/* -==================== ROUTES ====================- */
const routes = require('./controllers');

const PORT = process.env.PORT || 3000;

const app = express();

app.use(bodyParser.json());

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}! 🚀`);
});

/* Routes */
app.use('/user', routes.user);
app.use('/login', routes.login);
app.use('/categories', routes.categories);
app.use('/post', routes.post);

/* Error Middlewares */
app.use(joiError);
app.use(domainError);
app.use(serverError);

app.get('/', (_req, res) => {
  res.send();
});
