const mongoose = require("mongoose");

const Schema = mongoose.Schema;

var Usersschema = new Schema({

  name:{
    type: String,
    required:[true, 'name field is required'],
    minlength: 5,
    maxlength: 40
  },

  slack_id:{
    type: String,
    unique: true,
    required:[true, 'slack_id field is required']
  },

  slack_image:{
    type:String,
    required:[false]
  },

  slack_image_48:{
    type:String,
    required:[false]
  },

  slack_image_512:{
    type:String,
    required:[false]
  },

  games_won: {
    type: Number,
    default: 0
  },

  games_lost: {
    type: Number,
    default: 0
  },

  total_score: {
    type: Number,
    default: 0
  },

});

const Users = mongoose.model('users', Usersschema)
module.exports = Users;
