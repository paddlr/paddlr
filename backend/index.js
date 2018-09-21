// require('dotenv').load();
require('dotenv-flow').config();

const express = require("express");
const userRoutes = require('./routes/users');
const gameRoutes = require('./routes/games');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const morgan = require("morgan");
const fetch = require("node-fetch");

const path = require('path')
const app = express();


mongoose.connect(process.env.DB,  { useNewUrlParser: true });

// Serve the static files from the React app
app.use(express.static(path.join(__dirname, '/../../frontend/build')));

mongoose.Promise = global.Promise;

app.use(bodyParser.json());
app.use('/api/users', userRoutes);
app.use('/api/games', gameRoutes);
app.use(morgan("dev"));

// Handles any requests that don't match the ones above
app.get('*', (req,res) =>{
  res.sendFile(path.join(__dirname+'/../../frontend/build', 'index.html'));
});

app.use(function(err, req, res, next){
  // we send the error with an error message
  res.status(422).send({error: err.message});
});

app.listen(process.env.PORT || 4000, function(){
  console.log("now listening for requests");
})

module.exports = app;
