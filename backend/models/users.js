const mongoose = require("mongoose");
const bcrypt = require('bcrypt');
SALT_WORK_FACTOR = 10;
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

Usersschema.pre('save', function(next) {
    var user = this;
    if (!user.isModified('passcode')) return next();
    bcrypt.genSalt(SALT_WORK_FACTOR, function(err, salt) {
        if (err) return next(err);
        bcrypt.hash(user.passcode, salt, function(err, hash) {
            if (err) return next(err);
            user.passcode = hash;
            next();
        });
    });
});

Usersschema.methods.comparePassCode = function(candidatePassword, cb) {
    bcrypt.compare(candidatePassword, this.passcode, function(err, isMatch) {
        if (err) return cb(err);
        cb(null, isMatch);
    });
};

var hello;

module.exports = Users;
