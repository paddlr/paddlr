const fetch = require("node-fetch");
const Url = "https://slack.com/api/users.list";
const Users = require('../models/users');

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
      var jsonLength = Object.keys(response).length;
      var i;
      for (i = 0; i <= jsonLength; i++) {
          console.log("real name: ", response.members[i].real_name);
          console.log("image: ", response.members[i].profile.image_192);
          console.log("id: ", response.members[i].id)
        }
    })
    .catch(function(err){
      console.log(err);
    })

}



SlackUsers.prototype.addUsersToDatabase = function(value){

}



module.exports = SlackUsers;
