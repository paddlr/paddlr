const mongoose = require("mongoose");

const Schema = mongoose.Schema;

var Scoresschema = new Schema({
  game_id:{
    game_id: Schema.Types.ObjectId,
    required:[true, 'Game id is required']
  },

  player_id:{
    player_id: Schema.Types.ObjectId,
    required:[true, 'Player id is required']
  },

  score:{
    type: Number,
    required:[true, 'Score field is required']
  },

  win:{
    type: boolean,
    default: false
  }

});

const Scores = mongoose.model('scores', Scoresschema)


module.exports = Scores;