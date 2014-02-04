var mongoose = require('mongoose');

var projectSchema = new mongoose.Schema({
    title: String,
    price: Number,
    description: String,
    start: {
      type: Date,
      default: Date.now()
    },
    end: {
      type: Date,
      default: Date.now()
    },
    client: {
      type: mongoose.Schema.ObjectId,
      ref: 'client'
    }
});

module.exports = mongoose.model('projects', projectSchema);