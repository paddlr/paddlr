const express = require('express');
const router = express.Router();
const Users = require('../models/users');
const fetch = require("node-fetch");
const Url = "https://slack.com/api/users.list";

const options = {
  method: 'GET',
  headers: {
    'Authorization': 'Bearer ' + process.env.TOKEN,
    'Content-type': 'application/json'
  }
};

router.get("/slack", function(req, res){
  fetch(Url, options)
    .then(function(data){
      return data.json();
    })
    .then(function(response){
      res.send(response);
      console.log(response);
    })
    .catch(function(err){
      console.log(err);
    })
  })




router.get("/", function(req, res){
  Users.find({}).then(function(Users){
    res.send(Users);
  })
});

router.get("/:id", function(req, res, next){
  Users.findById({_id: req.params.id}).then(function(selectedUser){
    res.send(selectedUser);
  })
});

router.post("/", function(req, res, next){
  Users.create(req.body).then(function(Users){
    res.send(Users);
  })
  .catch(next)
});

router.delete("/:id", function(req, res){
  Users.findOneAndDelete({_id: req.params.id}).then(function(Users){
    res.send(Users);
  })
});

module.exports = router;
