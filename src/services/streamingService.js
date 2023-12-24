const logger = require('../utils/logger');

let activeStreams = {};

const startStreaming = (userId, neuralData) => {
  return new Promise((resolve, reject) => {
    try {
      // Check if user is already streaming
      if (activeStreams[userId]) {
        reject(new Error('User is already streaming'));
      }

      // Start streaming
      activeStreams[userId] = neuralData;

      // Log the operation
      logger.info(`Started streaming for user ${userId}`);

      resolve({ status: 'Streaming started' });
    } catch (err) {
      reject(err);
    }
  });
};

const stopStreaming = (userId) => {
  return new Promise((resolve, reject) => {
    try {
      // Check if user is not streaming
      if (!activeStreams[userId]) {
        reject(new Error('User is not currently streaming'));
      }

      // Stop streaming
      delete activeStreams[userId];

      // Log the operation
      logger.info(`Stopped streaming for user ${userId}`);

      resolve({ status: 'Streaming stopped' });
    } catch (err) {
      reject(err);
    }
  });
};

module.exports = {
  startStreaming,
  stopStreaming
};
