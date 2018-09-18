const express = require('express');
const router = express.Router();
const Users = require('../models/users');


router.get("/users", function(req, res){
  Users.find({}).then(function(Users){
    res.send(Users);
  })
});

router.post("/users", function(req, res,next){
  Users.create(req.body).then(function(Users){
    res.send(Users);
  })
  .catch(next)
});

router.put("/user/:id", function(req, res){
  res.send({type: 'PUT'});
});

router.delete("/user/:id", function(req, res){
  Users.findOneAndDelete({_id: req.params.id}).then(function(Users){
    res.send(Users);
  })
});

module.exports = router;
