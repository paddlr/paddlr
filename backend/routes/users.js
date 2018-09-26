const express = require('express');
const router = express.Router();
const Users = require('../models/users');

router.get("/", function(req, res){
  Users.find({}).then(function(users){
    res.send(users);
  })
});

router.get("/:id", function(req, res){
  Users.findById({_id: req.params.id}).then(function(selectedUser){
    res.send(selectedUser);
  })
});

router.post("/", function(req, res, next){
  Users.create(req.body).then(function(users){
    res.send(users);
  })
  .catch(next)
});

router.delete("/:id", function(req, res){
  Users.findOneAndDelete({_id: req.params.id}).then(function(users){
    res.send(users);
  })
});

module.exports = router;
