const express = require('express');
const router = express.Router();
const userService = require('../../services/userService');
const logger = require('../../utils/logger');
const errorHandler = require('../../utils/errorHandler');

// Register a new user
router.post('/register', async (req, res) => {
  try {
    const user = await userService.register(req.body);
    res.status(201).json({
      status: 'success',
      data: user
    });
  } catch (error) {
    logger.error(`Error registering user: ${error.message}`);
    errorHandler(error, req, res);
  }
});

// Login a user
router.post('/login', async (req, res) => {
  try {
    const user = await userService.login(req.body);
    if (user) {
      res.status(200).json({
        status: 'success',
        data: user
      });
    } else {
      res.status(401).json({
        status: 'error',
        message: 'Invalid credentials'
      });
    }
  } catch (error) {
    logger.error(`Error logging in user: ${error.message}`);
    errorHandler(error, req, res);
  }
});

// Get user profile
router.get('/profile/:userId', async (req, res) => {
  try {
    const user = await userService.getUserProfile(req.params.userId);
    if (user) {
      res.status(200).json({
        status: 'success',
        data: user
      });
    } else {
      res.status(404).json({
        status: 'error',
        message: 'User not found'
      });
    }
  } catch (error) {
    logger.error(`Error fetching user profile: ${error.message}`);
    errorHandler(error, req, res);
  }
});

module.exports = router;
