const request = require("request");

function SlackMessage(){

}

SlackMessage.prototype.postMessage = function(player_1, player_2){

  request.post({
      url: "https://hooks.slack.com/services/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",
      headers: {
       'Content-Type': 'application/json'
     },
      json: true,
      body: {
    "text": player_1 + " beats " + player_2 + " into submission"
    }
  }, function (error, response, body){
      console.log('Response: ', response);
  });
}

module.exports = SlackMessage;
