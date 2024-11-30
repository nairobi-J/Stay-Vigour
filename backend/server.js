const express = require('express');
const dotenv = require('dotenv');
const mysql = require('mysql2');
const cors = require('cors');
const userRoutes = require('./routes/userRoutes');
const fitnessRoutes = require('./routes/fitnessRoutes');

dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
  });

// Connect to the database
db.connect((err) => {
  if (err) throw err;
  console.log('Database connected!');
});

// // Routes
// app.use('/api/users', userRoutes);
// app.use('/api/fitness', fitnessRoutes);

// Error handling middleware
app.use((err, req, res, next) => {
  res.status(err.status || 500).json({ message: err.message });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
