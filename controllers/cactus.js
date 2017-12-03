//require express so we can use router
const express     = require ( 'express' );
const router    = express.Router();
//get access to the Product model
const Cactus     = require ( '../models/cactus.js' );
//___________________
//+++++++++++++INDEX+++++++++++++++++++++++++

router.get('/', async (req,res) => {

    const allCactus = await Cactus.find();
    res.render('./index.ejs', {allCactus});

});








module.exports = router;
