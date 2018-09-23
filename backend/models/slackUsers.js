const fetch = require("node-fetch");
const Url = "https://slack.com/api/users.list";

const Database = require("../models/databaseIntegration");
var database = new Database();

function SlackUsers(){

}

const options = {
  method: 'GET',
  headers: {
    'Authorization': 'Bearer ' + process.env.TOKEN,
    'Content-type': 'application/json'
  }
};

SlackUsers.prototype.getUsers = function(input){
  fetch(Url, options)
    .then(function(data){
      return data.json();
    })
    .then(function(response){
      input.send(response)
      database.integration(response);
      return response;
    })
    .catch(function(err){
      console.log(err);
    })
}

module.exports = SlackUsers;
