const mongoose = require('mongoose');

const cactusSchema = mongoose.Schema({
  url: { type: String, require: true },
  submitted_by: String
});

module.exports = mongoose.model('Cactus', cactusSchema);
