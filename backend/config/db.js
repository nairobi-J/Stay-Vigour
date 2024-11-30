const mysql = require('mysql2');
const schema = require('./schema');
const dotenv = require('dotenv');

dotenv.config();

// Database connection
const db = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
});

// Initialize the database
const queries = schema.split(';').filter(query => query.trim()); // Split and filter out empty queries

db.connect((err) => {
  if (err) {
    console.error('Database connection failed:', err);
    process.exit(1);
  }
  console.log('Connected to database.');

  queries.forEach((query, index) => {
    db.query(query, (err) => {
      if (err) {
        console.error(`Error executing query ${index + 1}:`, err);
      } else {
        console.log(`Query ${index + 1} executed successfully.`);
      }
    });
  });

  db.end(() => console.log('Database initialized.'));
});
