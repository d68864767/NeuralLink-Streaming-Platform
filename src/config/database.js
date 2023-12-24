const mongoose = require('mongoose');
require('dotenv').config();

const { DB_HOST, DB_USER, DB_PASS, DB_NAME } = process.env;

const connectionString = `mongodb://${DB_USER}:${DB_PASS}@${DB_HOST}/${DB_NAME}`;

const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false,
};

mongoose.connect(connectionString, options)
  .then(() => console.log('Database connection established!'))
  .catch((error) => console.error('Error connecting to database: ', error));

module.exports = mongoose;
