const logger = require('./logger');

// Error handling middleware
function errorHandler(err, req, res, next) {
  // Log the error
  logger.error(err.message);

  // Set HTTP status code
  let statusCode = err.statusCode || 500;

  // Set error message
  let message = err.message || 'Internal Server Error';

  // Send error response
  res.status(statusCode).json({
    status: 'error',
    message: message
  });
}

module.exports = errorHandler;
