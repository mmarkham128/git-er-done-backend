var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
const UserSchema = require("../models/users");
const user = require('../models/users')

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render('users')
});


// Login Page

router.get('/login', function(req, res, next){
  res.render('login')
})

router.get('/login', function(req, res, next) {
  res.render('login');
});

router.post('/login', function(req, res, next) {
  user
    .findOne({
      where: {
        Username: req.body.username,
        Password: req.body.password
      }
    })
    .then(user => {
      if (user) {
        res.send('Login succeeded!');
      } else {
        res.send('Invalid login!');
      }
    });
});

 
module.exports = router;
