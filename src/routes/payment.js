const express = require('express');
const router = express.Router();

router.post('/process-payment', (req, res) => {
  res.status(200).json({ message: 'Route is alive' });
});

module.exports = router;