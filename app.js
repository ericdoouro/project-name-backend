require('dotenv').config();

const cors = require('cors');
const express = require('express');

const database = require('./database');
const usersRouter = require('./routes/users');
const articlesRouter = require('./routes/articles');
const errorHandler = require('./middlewares/error');
const requestLogger = require('./middlewares/logger');

const app = express();
const PORT = 3000;

app.use(express.json());
app.use(cors());
app.use(requestLogger);

app.use('/users', usersRouter);
app.use('/articles', articlesRouter);

app.use((req, res) => {
  res.status(404).send({
    message: 'Recurso não encontrado',
  });
});

app.use(errorHandler);

database.once('open', () => {
  app.listen(PORT, () => {
    console.log(`Servidor iniciado na porta ${PORT}`);
  });
});

module.exports = app;