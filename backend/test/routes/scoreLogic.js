var ScoreLogic =  require('/Users/apple/Documents/Makers/paddlr/backend/models/scoreLogic.js'); //remember to change the scoreLogic path
var Users =  require('/Users/apple/Documents/Makers/paddlr/backend/models/users.js'); //remember to change the Users paths.
var sinon = require("sinon");
var assert = require("assert");


describe('ScoreLogic', function(){

    var scoreLogic = new ScoreLogic();
    var users = new Users();
    var mockedGame =
    {
      "game_type": "friendly",
      "game_created_at": "2018-09-23T14:52:25.643Z",
      "_id": "5ba7a8a9925fe9154a458668",
      "players": [
        {
          "_id": "5ba7a8a9925fe9154a45866a",
          "player_id": "5ba7ac0643ab5c17383210b6",
          "player_score": 9
        },
        {
          "_id": "5ba7a8a9925fe9154a458669",
          "player_id": "5ba7ac0643ab5c17383210b7",
          "player_score": 2
        }
      ]
    }

  it('returns true if player 1 wins the game', function(){
    expect(scoreLogic.isPlayerOneWinner(mockedGame)).to.be.true;
  })

  it('returns false if player 1 loses the game', function(){
    var anotherMockedGame =
    {
      "game_type": "friendly",
      "game_created_at": "2018-09-23T14:52:25.643Z",
      "_id": "5ba7a8a9925fe9154a458668",
      "players": [
        {
          "_id": "5ba7a8a9925fe9154a45866a",
          "player_id": "5ba7ac0643ab5c17383210b6",
          "player_score": 9
        },
        {
          "_id": "5ba7a8a9925fe9154a458669",
          "player_id": "5ba7ac0643ab5c17383210b7",
          "player_score": 21
        }
      ]
    }
    expect(scoreLogic.isPlayerOneWinner(anotherMockedGame)).to.be.false
  })

it("updateWinnerInfo can be called takes an argument", function(){
  var spy = sinon.spy(scoreLogic, "updateWinnerInfo");
  scoreLogic.updateWinnerInfo("player");
  var spyCall = scoreLogic.updateWinnerInfo.getCall(0);
  assert("players", spyCall.args[0]);
})

it("updateLoserInfo can be called takes an argument", function(){
  var spy = sinon.spy(scoreLogic, "updateLoserInfo");
  scoreLogic.updateLoserInfo("player 2");
  var spyCall = scoreLogic.updateLoserInfo.getCall(0);
  assert("player 2", spyCall.args[0]);
})


});
