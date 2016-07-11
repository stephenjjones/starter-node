const express = require('express');

const router = express.Router();

const apiVersion1 = require('./api1.js');

router.use('/v1', apiVersion1);

module.exports = router;
