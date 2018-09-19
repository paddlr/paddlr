const mongoose = require("mongoose");

const Schema = mongoose.Schema;

var Usersschema = new Schema({
  username:{
    type: String,
    required:[true, 'Name field is required']
  },

  passcode:{
    type: String,
    required:[true, 'Passcode is required']
  },

  user_created_at:{
    type: Date,
    default: new Date()
  }

});

const Users = mongoose.model('users', Usersschema)

module.exports = Users;
