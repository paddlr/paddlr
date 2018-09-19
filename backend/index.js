const express = require("express");
const userRoutes = require('./routes/users');
const gameRoutes = require('./routes/games');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const morgan = require("morgan");

const app = express();

mongoose.connect("mongodb://steph:cheese1@ds161102.mlab.com:61102/steph",  { useNewUrlParser: true });
mongoose.Promise = global.Promise;

app.use(bodyParser.json());
app.use('/users', userRoutes);
app.use('/games', gameRoutes);
app.use(morgan("dev"));

app.use(function(err, req, res, next){
  // we send the error with an error message
  res.status(422).send({error: err.message});
});

app.listen(process.env.PORT || 4000, function(){
  console.log("now listening for requests");
})
