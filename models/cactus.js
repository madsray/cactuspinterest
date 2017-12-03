const mongoose = require('mongoose');

const cactusSchema = mongoose.Schema({
  url: { type: String, require: true },
  title: String
});

module.exports = mongoose.model('Cactus', cactusSchema);
