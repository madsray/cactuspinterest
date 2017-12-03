
const mongoose = require('mongoose');
//many
//refernce the one
const commentSchema = mongoose.Schema({
  author: {type: String},
  content: { type: String, required:true },
  cactus: {type: mongoose.Schema.Types.ObjectId, ref:'id'}
});

module.exports = mongoose.model('Comments', commentsSchema);
