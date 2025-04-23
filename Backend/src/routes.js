const express = require('express');
const router = express.Router();

router.get('/hello', (req, res) => {
  res.send('Hello from /api/hello!');
});

module.exports = router;