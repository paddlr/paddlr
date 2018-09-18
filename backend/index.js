const express = require("express");
const routes = require('./routes/api');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const app = express();

mongoose.connect("mongodb://steph:cheese1@ds161102.mlab.com:61102/steph",  { useNewUrlParser: true });
mongoose.Promise = global.Promise;

app.use(bodyParser.json());
app.use('/', routes);

app.use(function(err, req, res, next){
  // we send the error with an error message
  res.status(422).send({error: err.message});
});



app.listen(process.env.post || 4000, function(){
  console.log("now listening for requests");
})
