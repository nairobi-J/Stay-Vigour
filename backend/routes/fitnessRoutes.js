const express = require('express');
const router = express.Router();

// Example route
router.get('/', (req, res) => {
  res.json({ message: 'fitness route is working!' });
});

module.exports = router;
