
const Users = require('../models/users');

function ScoreLogic(){

}

ScoreLogic.prototype.isPlayerOneWinner = function(data){
  let player_1 = data.players[0] 
  let player_2 = data.players[1] 
  if(player_1.player_score > player_2.player_score){
    return true;
  }
}

ScoreLogic.prototype.updateWinnerInfo = function(player_id){
  const updateData = {
    $inc: { games_won: 1, total_score: 1}
  }
  Users.updateOne({_id: player_id}, updateData);
}

ScoreLogic.prototype.updateLoserInfo = function(player_id){
  const updateData = {
    $inc: { games_lost: 1, total_score: -1}
  }
  Users.updateOne({_id: player_id}, updateData);
}

module.exports = ScoreLogic;
