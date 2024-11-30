// controllers/fitnessController.js
const db = require('../config/db');

// Get all workouts
const getAllWorkouts = (req, res) => {
  const query = 'SELECT * FROM Workouts';
  db.query(query, (err, results) => {
    if (err) return res.status(500).json({ error: 'Database error', details: err });
    res.status(200).json(results);
  });
};

// Add a workout
const addWorkout = (req, res) => {
  const { userID, workoutName, duration, caloriesBurned } = req.body;
  if (!userID || !workoutName || !duration || !caloriesBurned) {
    return res.status(400).json({ error: 'All fields are required' });
  }

  const query =
    'INSERT INTO Workouts (UserID, WorkoutName, Duration, CaloriesBurned) VALUES (?, ?, ?, ?)';
  db.query(query, [userID, workoutName, duration, caloriesBurned], (err, results) => {
    if (err) return res.status(500).json({ error: 'Database error', details: err });
    res.status(201).json({ message: 'Workout added successfully', workoutID: results.insertId });
  });
};

module.exports = { getAllWorkouts, addWorkout };
