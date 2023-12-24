const winston = require('winston');

// Define your custom format
const customFormat = winston.format.printf(({ level, message, timestamp }) => {
  return `${timestamp} ${level.toUpperCase()}: ${message}`;
});

// Create a logger instance
const logger = winston.createLogger({
  level: 'info',
  format: winston.format.combine(
    winston.format.timestamp(),
    customFormat
  ),
  transports: [
    new winston.transports.Console(),
    new winston.transports.File({ filename: 'logs/error.log', level: 'error' }),
    new winston.transports.File({ filename: 'logs/combined.log' })
  ]
});

module.exports = logger;
