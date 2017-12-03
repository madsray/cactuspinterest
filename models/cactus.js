const mongoose = require('mongoose');

const cactusSchema = mongoose.Schema({
  url: { type: String, require: true },
  title: String,
  category: {type: String, require: true}
});

module.exports = mongoose.model('Cactus', cactusSchema);
