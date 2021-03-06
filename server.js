const express  = require('express');
const mongoose = require('mongoose');
const morgan   = require('morgan');
const app      = express();
const PORT     = process.env.PORT || 3000;
const override = require('method-override');

// connect to database
const mongoURI = process.env.MONGODB_URI || 'mongodb://localhost:27017/cactus_pinterest';
mongoose.connect(mongoURI, { useMongoClient: true});
mongoose.Promise = global.Promise;

// test db connection
const db = mongoose.connection;
db.on('error', (err) => console.log(err.message));
db.on('connected', () => console.log('Mongo running: ', mongoURI));

// controllers
const cactusController = require('./controllers/cactus.js');
const commentsController = require('./controllers/comments.js');

// middleware
app.use(express.urlencoded({ extended: false}));
app.use(express.json());
app.use(morgan('dev'));
app.use(override('_method'));
app.use(express.static('public'));
app.use('/cactus', cactusController);
app.use('/comments', commentsController);

// // root route
app.get('/', (req, res) => res.redirect('/cactus'));

// :ear
app.listen(PORT, () => {
  console.log('===========================');
  console.log('Photo app on port: ', PORT);
  console.log('===========================');
});
