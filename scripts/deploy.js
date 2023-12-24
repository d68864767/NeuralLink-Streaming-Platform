const shell = require('shelljs');
const logger = require('../src/utils/logger');

logger.info('Starting deployment process...');

// Check if Docker is installed
if (!shell.which('docker')) {
  logger.error('Docker is not installed or not in the PATH. Please install Docker to continue.');
  shell.exit(1);
}

// Build Docker image
logger.info('Building Docker image...');
if (shell.exec('docker build -t neurallink-streaming-platform .').code !== 0) {
  logger.error('Error building Docker image.');
  shell.exit(1);
}

// Run Docker container
logger.info('Running Docker container...');
if (shell.exec('docker run -d -p 3000:3000 --name neurallink-streaming-platform neurallink-streaming-platform').code !== 0) {
  logger.error('Error running Docker container.');
  shell.exit(1);
}

logger.info('Deployment successful. NeuralLink Streaming Platform is now running.');
