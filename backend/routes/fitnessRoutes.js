const express = require('express');
const router = express.Router();
const { getAllWorkouts, addWorkout } = require('../controllers/fitnessController');

// Get all workouts
router.get('/', getAllWorkouts);

// Add a workout
router.post('/', addWorkout);

module.exports = router;
