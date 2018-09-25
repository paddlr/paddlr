const mongoose = require("mongoose");
const {PlayersSchema} = require("./players")
const Schema = mongoose.Schema;

var Gamesschema = new Schema({
  game_type:{
    type: String,
    default: "leaderboard",
    enum: ['friendly', 'showcase_match', 'tournament', 'leaderboard']
  },

  game_created_at:{
    type: Date,
    default: new Date()
  },

  players: [PlayersSchema, PlayersSchema]

});

const Games = mongoose.model('games', Gamesschema)

module.exports = Games;