const express = require('express');
const router = express.Router();
const Games = require('../models/games');
const Users = require('../models/users');

router.get("/", function(req, res, next){
  Games.find({}).then(function(Games){
    res.send(Games);
  })
  .catch(next)
});

router.post("/", async(req, res) => {
  const player_1 = await Users.findOne({_id: req.body.players[0].player_id});
  const player_2 = await Users.findOne({_id: req.body.players[1].player_id});
  
  console.log('Player 1: ', player_1.name, 'vs Player 2: ', player_2.name);
  res.send(Games);
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
