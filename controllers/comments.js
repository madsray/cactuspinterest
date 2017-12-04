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
//++++++++++++++DELETE ROUTE++++++++++++++++++++++++
module.exports = router;
