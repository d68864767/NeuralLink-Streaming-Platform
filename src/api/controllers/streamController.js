const express = require('express');
const router = express.Router();
const streamingService = require('../../services/streamingService');
const logger = require('../../utils/logger');
const errorHandler = require('../../utils/errorHandler');

// Route to start streaming
router.post('/start', async (req, res) => {
  try {
    const { userId, neuralData } = req.body;

    // Validate request body
    if (!userId || !neuralData) {
      return res.status(400).json({
        status: 'error',
        message: 'Invalid request body. userId and neuralData are required.'
      });
    }

    // Start streaming
    const result = await streamingService.startStreaming(userId, neuralData);

    // Log the operation
    logger.info(`Started streaming for user ${userId}`);

    // Send response
    res.status(200).json({
      status: 'success',
      message: 'Streaming started successfully',
      data: result
    });
  } catch (err) {
    errorHandler(err, req, res);
  }
});

// Route to stop streaming
router.post('/stop', async (req, res) => {
  try {
    const { userId } = req.body;

    // Validate request body
    if (!userId) {
      return res.status(400).json({
        status: 'error',
        message: 'Invalid request body. userId is required.'
      });
    }

    // Stop streaming
    const result = await streamingService.stopStreaming(userId);

    // Log the operation
    logger.info(`Stopped streaming for user ${userId}`);

    // Send response
    res.status(200).json({
      status: 'success',
      message: 'Streaming stopped successfully',
      data: result
    });
  } catch (err) {
    errorHandler(err, req, res);
  }
});

module.exports = router;
