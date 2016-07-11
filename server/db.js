const mongoose = require('mongoose');

const config = require('../config');

mongoose.connect(config.database.uri);

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', (callback) => {
  console.log('mongodb connection opened');
});

module.exports = db;
