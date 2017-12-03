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
//+++++++++++++++NEW++++++++++++++++++++++++++
router.get('/new', async(req,res) => {
  try {
  res.render('../views/new.ejs');
} catch (err){
  res.send(err.message);
}
})
//+++++++++++++CREATE +++++++++++++++++++++++++++
router.post('/', async (req,res)=>{
  try {
    const createdCactus = await Cactus.create(req.body);
    res.redirect('/');
  } catch (err) {
    res.send(err.message);
  }
})
// +++++++++++++++SHOW+++++++++++++++++++++++++++
  router.get('/:id', async (req,res) => {
    const oneCactus = await Cactus.findById(req.params.id);
    res.render('../views/show.ejs', {oneCactus});
  })






module.exports = router;
