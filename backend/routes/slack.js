const express = require('express');
const router = express.Router();
const SlackUsers = require("../models/slackUsers")

var slackUser = new SlackUsers();

router.get("/", function(req, res){
  var data = slackUser.getUsers(res);
  console.log(data);
})

module.exports = router;
