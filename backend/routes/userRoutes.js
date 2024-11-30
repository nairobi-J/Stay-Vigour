const express = require('express');
const router = express.Router();
const { getAllUsers, createUser } = require('../controllers/userController');

// Get all users
router.get('/', getAllUsers);

// Create a new user
router.post('/', createUser);

module.exports = router;
