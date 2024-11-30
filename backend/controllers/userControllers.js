// controllers/userController.js
const db = require('../config/db');

// Get all users
const getAllUsers = (req, res) => {
  const query = 'SELECT * FROM Users';
  db.query(query, (err, results) => {
    if (err) return res.status(500).json({ error: 'Database error', details: err });
    res.status(200).json(results);
  });
};

// Create a new user
const createUser = (req, res) => {
  const { name, email, password } = req.body;
  if (!name || !email || !password) {
    return res.status(400).json({ error: 'All fields are required' });
  }

  const query = 'INSERT INTO Users (Name, Email, Password) VALUES (?, ?, ?)';
  db.query(query, [name, email, password], (err, results) => {
    if (err) return res.status(500).json({ error: 'Database error', details: err });
    res.status(201).json({ message: 'User created successfully', userID: results.insertId });
  });
};

module.exports = { getAllUsers, createUser };
