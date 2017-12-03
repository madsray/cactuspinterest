//require express so we can use router
const express     = require ( 'express' );
const router    = express.Router();
//get access to the Product model
const Cactus     = require ( '../models/cactus.js' );
const Comments     = require ( '../models/comments.js' );


module.exports = router;
