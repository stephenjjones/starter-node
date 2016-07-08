const express = require('express');
const controllers = require('../controllers');

const router = express.Router();

router.use((req, res, next) => {
  next()
});

router.get('/recipes', controllers.recipes);

router.get('/ingredients', (req, res) => {
  res.send('ingredients');
});

module.exports = router;
