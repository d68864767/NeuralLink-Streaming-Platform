const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/User');
const logger = require('../utils/logger');

// Register a new user
async function register(userData) {
  try {
    // Check if user already exists
    let user = await User.findOne({ email: userData.email });
    if (user) {
      throw new Error('User already exists');
    }

    // Hash the password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(userData.password, salt);

    // Create a new user
    user = new User({
      name: userData.name,
      email: userData.email,
      password: hashedPassword
    });

    // Save the user
    await user.save();

    logger.info(`User registered: ${user.name}`);
    return user;
  } catch (error) {
    logger.error(`Error registering user: ${error.message}`);
    throw error;
  }
}

// Login a user
async function login(userData) {
  try {
    // Check if user exists
    const user = await User.findOne({ email: userData.email });
    if (!user) {
      throw new Error('User not found');
    }

    // Check password
    const validPassword = await bcrypt.compare(userData.password, user.password);
    if (!validPassword) {
      throw new Error('Invalid credentials');
    }

    // Generate a token
    const token = jwt.sign({ _id: user._id }, process.env.JWT_SECRET);

    logger.info(`User logged in: ${user.name}`);
    return { user, token };
  } catch (error) {
    logger.error(`Error logging in user: ${error.message}`);
    throw error;
  }
}

// Get user profile
async function getUserProfile(userId) {
  try {
    // Find user by id
    const user = await User.findById(userId);
    if (!user) {
      throw new Error('User not found');
    }

    logger.info(`User profile fetched: ${user.name}`);
    return user;
  } catch (error) {
    logger.error(`Error fetching user profile: ${error.message}`);
    throw error;
  }
}

module.exports = {
  register,
  login,
  getUserProfile
};
