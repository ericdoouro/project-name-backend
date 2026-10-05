const fs = require('fs');
const path = require('path');

const requestLogPath = path.join(__dirname, '../logs/request.log');

const requestLogger = (req, res, next) => {
  const log = {
    method: req.method,
    url: req.originalUrl,
    date: new Date().toISOString(),
  };

  fs.appendFile(
    requestLogPath,
    `${JSON.stringify(log)}\n`,
    (error) => {
      if (error) {
        return next(error);
      }

      return next();
    },
  );
};

module.exports = requestLogger;
