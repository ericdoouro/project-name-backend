const { isCelebrateError } = require('celebrate');

const errorHandler = (err, req, res) => {
  const log = {
    method: req.method,
    url: req.originalUrl,
    date: new Date().toISOString(),
    error: err.message,
  };

  console.error(JSON.stringify(log));

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
