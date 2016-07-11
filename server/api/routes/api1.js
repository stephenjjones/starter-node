const express = require('express');

const controllers = require('../controllers');

const router = express.Router();

router.use((req, res, next) => {
  next()
});

router.get('/recipes', controllers.recipes);

router.get('/ingredients', controllers.ingredients);

module.exports = router;
