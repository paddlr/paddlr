const mongoose = require("mongoose");

const Schema = mongoose.Schema;

var PlayersSchema = new Schema({

  player_id:{
    type: String
  },

  player_score:{
    type: Number,
    required:[true, 'Score field is required']
  }

});

exports.PlayersSchema = PlayersSchema;
