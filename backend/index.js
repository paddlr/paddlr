if (process.env.NODE_ENV !== 'production'){
  require('dotenv').load();
}

const express = require("express");
var cors = require('cors');
const userRoutes = require('./routes/users');
const gameRoutes = require('./routes/games');
const slackRoutes = require('./routes/slack');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const morgan = require("morgan");
const path = require('path')
const app = express();
app.use(morgan("dev"));

app.use(cors())

var env = process.env.NODE_ENV
var connectionString = ''
if (env === 'test'){
  connectionString = process.env.MONGOLAB_URI_TEST
} else {
  connectionString = process.env.MONGOLAB_URI
};
mongoose.connect(connectionString,  { useNewUrlParser: true })
  .then(() => console.log('Connected to MongoDB...'))
  .catch(err => console.error('Could not connect to MongoDB...'));

// API calls
  app.use(bodyParser.json());
  app.use('/api/users', userRoutes);
  app.use('/api/games', gameRoutes);
  app.use('/api/slack', slackRoutes);
  

  // Serve the static files from the React app
  app.use(express.static(path.join(__dirname, '/../frontend/build')));

  // Handles any requests that don't match the ones above
  app.get('*', (req,res) =>{
    res.sendFile(path.join(__dirname+'/../frontend/build', 'index.html'));
  });

  app.use(function(err, req, res, next){
  // we send the error with an error message
  res.status(422).send({error: err.message});
});

app.listen(process.env.PORT || 4000, function(){
  console.log("now listening for requests");
})

module.exports = app;
