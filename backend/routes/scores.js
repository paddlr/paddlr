const express = require('express');
const router = express.Router();
const Scores = require('../models/scores');


router.get("/", function(req, res){
  Scores.find({}).then(function(Scores){
    res.send(Scores);
  })
});

router.post("/", function(req, res,next){
  Scores.create(req.body).then(function(Scores){
    res.send(Scores);
  })
  .catch(next)
});

router.put("/:id", function(req, res){
  res.send({type: 'PUT'});
});

router.delete("/:id", function(req, res){
  Scores.findOneAndDelete({_id: req.params.id}).then(function(Scores){
    res.send(Scores);
  })
});

module.exports = router;
