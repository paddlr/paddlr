const Games = require('../models/games');
const Users = require('../models/users');


function ScoreLogic(){

}

// ScoreLogic.prototype.updateScore= function(info){
//   var targetedPlayer = info[0].players.forEach(function(item){
//     if (Games.findOne({_id: item.player_id})){
//       var foundUser = Users.findById({_id: item.player_id})
//     }
//     else{
//       console.log("This player does not exist")
//     }
//   })
// };

ScoreLogic.prototype.updateScore = function(info){
  var player_one = Games.findOne({_id: info[25].players[0].player_id});
  var player_two = Games.findOne({_id: info[25].players[1].player_id});
  if(typeof player_one !== 'undefined' && typeof player_two !== 'undefined'  ){
    console.log(1);
    var gameWinner = this.getLoser(info);
      console.log(2);
    var gameLoser = this.getWinner(info);
      console.log(3);
    this.updateWinnerInfo(gameWinner);
      console.log(4);
    this.updateLoserInfo(gameLoser);
  }

}

//this gets you the loser
ScoreLogic.prototype.getLoser = function(data){
  var players = data[25].players //change this
    if(players[0].player_score > players[1].player_score){
      return players[1].player_id;
    }
    else{
      return players[0].player_id;
    }
}

// This gets you the winner
ScoreLogic.prototype.getWinner = function(data){
  var players = data[25].players //change this
    if(players[0].player_score > players[1].player_score){
      return players[0].player_id;
    }
    else{
      return players[1].player_id;
    }
}

// You need the winner for this
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


// you need the loser for this
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
