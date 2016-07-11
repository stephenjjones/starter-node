const mongoose = require('mongoose');
const argon = require('argon2');

const userSchema = mongoose.Schema({
  email: {
    type: String,
    lowercase: true,
    unique: true,
    required: true
  },
  username: String,
  hashedPassword: {
    type: String,
    required: true
  },
  dateCreated: {
    type: Date,
    default: Date.now 
  },
  dateUpdated: {
    type: Date,
    default: Date.now
  },
  role: {
    type: String,
    enum: ['User', 'Staff', 'Admin'],
    default: 'Client'
  }
});

// collection will be named 'users' since 'User' 1st arg
const User = mongoose.model('User', userSchema);
exports.User = User;
