const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const helmet = require('helmet');
const morgan = require('morgan');
const compression = require('compression');

// Load environment variables
require('dotenv').config();

const app = express();

// Middleware
app.use(helmet()); // Helps secure Express apps with various HTTP headers
app.use(compression()); // Compress response bodies for all request that traverse middleware
app.use(morgan('dev')); // HTTP request logger middleware
app.use(cors()); // Enable CORS
app.use(bodyParser.json()); // Parse incoming request bodies in a middleware before your handlers
app.use(bodyParser.urlencoded({ extended: true }));

// Set the port from the environment variable or default
app.set('port', process.env.PORT || 3000);

module.exports = app;
