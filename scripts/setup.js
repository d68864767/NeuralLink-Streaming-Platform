const mongoose = require('mongoose');
const logger = require('../src/utils/logger');

// Load environment variables
require('dotenv').config();

const { DB_HOST, DB_USER, DB_PASS, DB_NAME } = process.env;

const connectionString = `mongodb://${DB_USER}:${DB_PASS}@${DB_HOST}/${DB_NAME}`;

const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false,
};

logger.info('Setting up the NeuralLink Streaming Platform...');

mongoose.connect(connectionString, options)
  .then(() => {
    logger.info('Database connection established!');
    logger.info('Setup completed successfully!');
  })
  .catch((error) => {
    logger.error('Error connecting to database: ', error);
    logger.error('Setup failed!');
  });

process.on('exit', (code) => {
  mongoose.connection.close();
  logger.info(`About to exit with code: ${code}`);
});
