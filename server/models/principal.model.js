const mongoose = require('mongoose');

const principalSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true,
    default: 'principal@classroom.com'
  },
  password: {
    type: String,
    required: true,
    default: 'Admin'
  }
});

const Principal = mongoose.model('Principal', principalSchema);

module.exports = Principal;
