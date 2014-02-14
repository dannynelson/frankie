var mongoose = require('mongoose');

var loginProfileSchema = new mongoose.Schema({
    email: {
      type: String,
      unique: true
    },
    createdAt: {
      type: Date,
      default: Date.now()
    },
    password: String
});

module.exports = mongoose.model('loginProfile', loginProfileSchema);