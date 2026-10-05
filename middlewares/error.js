const fs = require('fs');
const path = require('path');
const { isCelebrateError } = require('celebrate');

const errorLogPath = path.join(__dirname, '../logs/error.log');

const errorHandler = (err, req, res, next) => {
  const log = {
    method: req.method,
    url: req.originalUrl,
    date: new Date().toISOString(),
    error: err.message,
  };

  fs.appendFile(
    errorLogPath,
    `${JSON.stringify(log)}\n`,
    (logError) => {
      if (logError) {
        return next(logError);
      }

      return null;
    },
  );

  if (isCelebrateError(err)) {
    return res.status(400).send({
      message: 'Dados inválidos',
    });
  }

  if (err.code === 11000) {
    return res.status(409).send({
      message: 'E-mail já cadastrado',
    });
  }

  return res.status(500).send({
    message: 'Erro interno do servidor',
  });
};

module.exports = errorHandler;
