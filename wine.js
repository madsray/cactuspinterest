const mongoose = require('mongoose');
 //schema
 const wineSchema = new mongoose.Schema({
   name: String,
   type: String,
   img: String,
   quantity: Number,
   price: Number


 })
module.exports = mongoose.model('Wine', wineSchema);
