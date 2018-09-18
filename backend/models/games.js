const mongoose = require("mongoose");

const Schema = mongoose.Schema;

var Gamesschema = new Schema({
  game_type:{
    type: String,
    required:[true, 'Game type field is required']
  },

  game_created_at:{
    type: Date,
    default: new Date()
  },

  score: {
    type: String,
    ref: 'Scores',
    required: false
  }

});

const Games = mongoose.model('games', Gamesschema)


module.exports = Games;