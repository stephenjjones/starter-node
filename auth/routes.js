const express = require('express');

const router = express.Router();

router.use((req, res, next) => {
  next()
});

router.get('/recipes', (req, res) => {
  res.send('recipes');
});

router.get('/ingredients', (req, res) => {
  res.send('ingredients');
});

module.exports = router;
