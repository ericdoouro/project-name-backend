const requestLogger = (req, res, next) => {
  const log = {
    method: req.method,
    url: req.originalUrl,
    date: new Date().toISOString(),
  };

  console.log(JSON.stringify(log));

  next();
};

module.exports = requestLogger;
