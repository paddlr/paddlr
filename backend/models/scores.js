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
  },

  player_id:{
  }

});

const Scores = mongoose.model('scores', Scoresschema)

exports.Scoresschema = Scoresschema;
// module.exports = Scores;
