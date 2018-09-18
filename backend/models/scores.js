const mongoose = require("mongoose");

const Schema = mongoose.Schema;

var Scoresschema = new Schema({
  
  score:{
    type: Number,
    required:[true, 'Score field is required']
  },

  win:{
    type: Boolean,
    default: false
  }

});

const Scores = mongoose.model('scores', Scoresschema)


module.exports = Scores;