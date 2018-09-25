const express = require('express');
const router = express.Router();
const Games = require('../models/games');

const Users = require('../models/users');
const ScoreLogic = require('../models/scoreLogic');
const SlackMessage = require('../models/slackMessage');
var scoreLogic = new ScoreLogic();
var slackMessage = new SlackMessage();

router.get("/", function(req, res, next){
  Games.find({}).then(function(Games){
    res.send(Games);
  })
  .catch(next)
});

// Need to work on function that determines if given player is winner
router.post("/", async(req, res) => {
  const player_1 = await Users.findOne({_id: req.body.players[0].player_id});
  const player_2 = await Users.findOne({_id: req.body.players[1].player_id});
  
  if (scoreLogic.isPlayerOneWinner(req.body)){
    scoreLogic.updateWinnerInfo(player_1._id);
    scoreLogic.updateLoserInfo(player_2._id);
    slackMessage.postMessage(player_1.name, player_2.name);
  }
  else {
    scoreLogic.updateWinnerInfo(player_2._id);
    scoreLogic.updateLoserInfo(player_1._id);
    slackMessage.postMessage(player_2.name, player_1.name);
  }
  Games.create(req.body).then(function(Games){
    res.send(Games);
  })
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
