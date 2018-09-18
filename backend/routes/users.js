const express = require('express');
const router = express.Router();
const Users = require('../models/users');


router.get("/", function(req, res){
  Users.find({}).then(function(Users){
    res.send(Users);
  })
});

router.post("/", function(req, res,next){
  Users.create(req.body).then(function(Users){
    res.send(Users);
  })
  .catch(next)
});

router.put("/:id", function(req, res){
  res.send({type: 'PUT'});
});

router.delete("/:id", function(req, res){
  Users.findOneAndDelete({_id: req.params.id}).then(function(Users){
    res.send(Users);
  })
});

module.exports = router;
