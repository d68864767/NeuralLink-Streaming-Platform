const express = require('express');
const app = require('./config/server');
const logger = require('./utils/logger');
const errorHandler = require('./utils/errorHandler');
const streamController = require('./api/controllers/streamController');
const userController = require('./api/controllers/userController');

// API routes
app.use('/api/stream', streamController);
app.use('/api/user', userController);

// Error handling middleware
app.use(errorHandler);

// Start the server
const port = app.get('port');
app.listen(port, () => {
  logger.info(`Server is running on port ${port}`);
});

module.exports = app;
