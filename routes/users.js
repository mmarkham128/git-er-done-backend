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



router.post("/api/users", (req, res, next) => {
  const post = new Post({
    employeeFirstName: req.body.employeeFirstName,
    employeeLastName: req.body.employeeLastName,
    username: req.body.username,
    password: req.body.password,
    admin: req.body.admin,
    employeeID: req.body.employeeID,
    id: req.body.id,
  });
  user.save().then(createdUser => {
    res.status(201).json({
      message: "User added successfully",
      userId: createdUser._id
    });
  });});


 
module.exports = router;
