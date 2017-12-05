//require express so we can use router
const express     = require ( 'express' );
const router    = express.Router();
//get access to the Product model
const Cactus     = require ( '../models/cactus.js' );
const Comments     = require ( '../models/comments.js' );
//+++++++++++++++++routes+++++++++++++++++++++++
router.get('/',async (req,res) => {
  const allComments = await Comments.find().populate('cactus');
  res.send(allComments);
});
//++++++++++++++create route++++++++++++++++++++
router.post('/', async (req,res) => {
  console.log(req.body);
  try {
    const createdComment = await Comments.create(req.body);
    res.redirect('back');
  } catch (err) {
    res.send(err.message);
  }
});
// +++++++++++++++EDIT ROUTE++++++++++++++++++++
router.get('/:id/edit', async (req,res) => {
  try {
    const updateCactus = await Comments.findById(req.params.id);

    res.render('../views/edit.ejs', {updateCactus});
  } catch (err) {

    res.send(err.message);
  }
})
//+++++++++++++UPDATE ROUTE++++++++++++++++++++
router.put('/:id', async (req,res) => {
  try{
    const updateCactus = await Comments.findByIdAndUpdate(req.params.id, req.body);

    res.redirect('/cactus/'+ updateCactus.cactus);
  } catch (err){
    res.send(err.message);
  }
})

//++++++++++++++DELETE ROUTE++++++++++++++++++++++++
router.delete('/:id', async (req, res) => {
   const deleteComment = await Comments.findByIdAndRemove(req.params.id);
   res.redirect('back');
});
module.exports = router;
