const express = require('express');
const router = express.Router();
const Games = require('../models/games');


router.get("/", function(req, res){
  Games.find({}).then(function(Games){
    res.send(Games);
  })
});

router.post("/", function(req, res,next){
  Games.create(req.body).then(function(Games){
    res.send(Games);
  })
  .catch(next)
});

router.delete("/:id", function(req, res){
  Games.findOneAndDelete({_id: req.params.id}).then(function(Games){
    res.send(Games);
  })
});

module.exports = router;
