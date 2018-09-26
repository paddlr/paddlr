const express = require('express');
const router = express.Router();
const SlackUsers = require("../models/slackUsers")

let slackUser = new SlackUsers();

router.get("/", function(req, res){
  slackUser.getUsers(res);
})

module.exports = router;
