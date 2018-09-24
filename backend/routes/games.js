const express = require('express');
const router = express.Router();
const Games = require('../models/games');
const ScoreLogic = require('../models/scoreLogic');

var scoreLogic = new ScoreLogic();

router.get("/", function(req, res, next){
  Games.find({}).then(function(Games){
    console.log("----------------")
    var winner = scoreLogic.findWinner(Games);
    scoreLogic.updateLoserInfo('5ba78209e751870015c3df94')
    res.send(Games);
  })
  .catch(next)
});

router.post("/", function(req, res,next){
  Games.create(req.body).then(function(Games){
    res.send(Games);
  })
  .catch(next)
});


router.get("/:id", function(req, res, next){
  Games.findById({_id: req.params.id}).then(function(selectedGame){
    res.send(selectedGame);
  })
  .catch(next)
});


router.delete("/:id", function(req, res, next){
  Games.findOneAndDelete({_id: req.params.id}).then(function(Games){
    res.send(Games);
  })
  .catch(next)
});

module.exports = router;
