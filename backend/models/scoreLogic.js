const Games = require('../models/games');
const Users = require('../models/users');

function ScoreLogic(){
}

ScoreLogic.prototype.verifyUsersAndUpdateScore = function(info){
  var player_one = Games.findOne({_id: info[25].players[0].player_id});
  var player_two = Games.findOne({_id: info[25].players[1].player_id});
  if(typeof player_one !== 'undefined' && typeof player_two !== 'undefined'  ){
    var gameWinner = this.getLoser(info);
    var gameLoser = this.getWinner(info);
    this.updateWinnerInfo(gameWinner);
    this.updateLoserInfo(gameLoser);
  }
  else{
    console.log("One or both users do not exist in the database");
  }
}


ScoreLogic.prototype.getLoser = function(data){
  var players = data[25].players //change this
    if(players[0].player_score > players[1].player_score){
      return players[1].player_id;
    }
    else{
      return players[0].player_id;
    }
}

ScoreLogic.prototype.getWinner = function(data){
  var players = data[25].players //change this
    if(players[0].player_score > players[1].player_score){
      return players[0].player_id;
    }
    else{
      return players[1].player_id;
    }
}

ScoreLogic.prototype.updateWinnerInfo = function(data){
  const updateData = {
    $inc: { games_won: 1, total_score: 1}
  }
  Users.updateOne({_id: data}, updateData, function(data, err){
    if(err){
      console.log(err);
    }
  });
}

ScoreLogic.prototype.updateLoserInfo = function(data){
  const updateData = {
    $inc: { games_lost: 1, total_score: -1}
  }
  Users.updateOne({_id: data}, updateData, function(data, err){
    if(err){
      console.log(err);
    }
  });
}



module.exports = ScoreLogic;
