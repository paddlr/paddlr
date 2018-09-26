var Database = require('../../models/databaseIntegration.js');
var UsersJs = require('../../models/users.js');
var sinon = require("sinon");

describe('database Integration tests', function(){
  var database = new Database();
  var Users = new UsersJs();
  var mockData = {
    "members" : [
      {
      "id" : "USLACKCHEESE",
      "name" : "John Doe",
      "profile" : {
        "slack_image" : "This is an image",
        "slack_image_48" : "This is a 48 image",
        "slack_image_512" : "This is a 512 image"
      }
    },
    {
      "id" : "USLAHSSSESE",
      "name" : "John Doe 2",
      "profile" : {
        "slack_image" : "This is the second image",
        "slack_image_48" : "This is the second 48 image",
        "slack_image_512" : "This is the second 512 image"
      }
    }
  ]
}

it('hold user data within an array', function(){
  expect(database.newUsers).to.be.an('array');
});

})
