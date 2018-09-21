const mongoose = require("mongoose");

const Schema = mongoose.Schema;

var Usersschema = new Schema({

  name:{
    type: String,
    required:[true, 'Name field is required']
  },

  slack_id:{
    type: String,
    unique: true,
    required:[true, 'Slack_id field is required']
  },

  slack_image:{
    type:String,
    required:[true, 'Slack_id field is required']
  }

});

const Users = mongoose.model('users', Usersschema)
module.exports = Users;
