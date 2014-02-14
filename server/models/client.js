var mongoose = require('mongoose');

var clientSchema = new mongoose.Schema({
    first: String,
    last: String,
    email: {
      type: String,
      unique: true
    },
    phone: String
});

module.exports = mongoose.model('clients', clientSchema);