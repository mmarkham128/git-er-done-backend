var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
const user = require('../models/users');
const jwt = require("jsonwebtoken")
const bcrypt = require('bcryptjs');




// Login Page

router.get('/login', function(req, res, next){
  res.render('login')
})

// IM NO LONGER STOOPID   (ノಠ益ಠ)ノ彡┻━┻ 


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
