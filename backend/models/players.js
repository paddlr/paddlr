const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const PlayersSchema = new Schema({

  player_id:{
    type: String,
    required:[true, 'Please pass the user_id as player_id']
  },

  player_score:{
    type: Number,
    min: 0,
    max: 50,
    required:[true, 'player_score field is required']
  }

});

exports.PlayersSchema = PlayersSchema;
