const Games = require('../models/games');
const Users = require('../models/users');

function ScoreLogic(){

}

ScoreLogic.prototype.isPlayerOneWinner = function(data){
  var player_1 = data.players[0] 
  var player_2 = data.players[1] 
  if(player_1.player_score > player_2.player_score){
    return true;
  }
  else {
    return false;
  }
}

ScoreLogic.prototype.updateWinnerInfo = function(player_id){
  const updateData = {
    $inc: { games_won: 1, total_score: 1}
  }
  Users.updateOne({_id: player_id}, updateData, function(data, err){
    if(err){
      console.log(err);
    }
  });
}

ScoreLogic.prototype.updateLoserInfo = function(player_id){
  const updateData = {
    $inc: { games_lost: 1, total_score: -1}
  }
  Users.updateOne({_id: player_id}, updateData, function(data, err){
    if(err){
      console.log(err);
    }
  });
}

module.exports = ScoreLogic;
