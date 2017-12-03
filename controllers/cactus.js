//require express so we can use router
const express     = require ( 'express' );
const router    = express.Router();
//get access to the Product model
const Cactus     = require ( '../models/cactus.js' );
//___________________
//+++++++++++++INDEX+++++++++++++++++++++++++
router.get('/', async (req,res) => {
    const allCactus = await Cactus.find();
    res.render('./indexNav.ejs', {allCactus});
});
router.get('/bake', async (req,res) => {
    const bakeCactus = await Cactus.find({category: "Bake"});
    res.render('./indexBake.ejs', {bakeCactus});
});
router.get('/plants', async (req,res) => {
    const plantsCactus = await Cactus.find({category: "Plants"});
    res.render('./indexPlants.ejs', {plantsCactus});
});
router.get('/crafts', async (req,res) => {
    const craftsCactus = await Cactus.find({category: "Crafts"});
    res.render('./indexCrafts.ejs', {craftsCactus});
});
router.get('/clothes', async (req,res) => {
    const clothesCactus = await Cactus.find({category: "Clothes"});
    res.render('./indexClothes.ejs', {clothesCactus});
});

//+++++++++++++++NEW++++++++++++++++++++++++++
router.get('/new', async(req,res) => {
  try {
  res.render('../views/new.ejs');
} catch (err){
  res.send(err.message);
}
});
//+++++++++++++CREATE +++++++++++++++++++++++++++

router.post('/bake', async (req,res)=>{
  console.log(req.body);
  try {
    const createdCactus = await Cactus.create(req.body);
    res.redirect('./'+ createdCactus.id);
  } catch (err) {
    res.send(err.message);
  }
});
// +++++++++++++++SHOW+++++++++++++++++++++++++++
  router.get('/:id', async (req,res) => {
    const oneCactus = await Cactus.findById(req.params.id);
    res.render('../views/show.ejs', {oneCactus});
  });






module.exports = router;
