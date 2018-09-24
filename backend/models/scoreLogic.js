const Games = require('../models/games');
const Users = require('../models/users');


function ScoreLogic(){

}

ScoreLogic.prototype.updateScore = function(info){
  var targetedPlayer = info[0].players.forEach(function(item){
    if (Games.findOne({_id: item.player_id})){
      var foundUser = Users.findById({_id: item.player_id})
      console.log("This is the user found", foundUser);
    }
    else{
      console.log("This player does not exist")
    }
  })
};

ScoreLogic.prototype.findWinner = function(data){
  var i;
  var players = data[0].players //change this
    if(players[0].player_score > players[1].player_score){
      console.log("The winner is ",  players[0].player_id)
      return players[0].player_id;
    }
    else{
      console.log("The winner is ",  players[1].player_id)
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
    else{
      console.log(data);
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
    else{
      console.log(data);
    }
  });
}



module.exports = ScoreLogic;
