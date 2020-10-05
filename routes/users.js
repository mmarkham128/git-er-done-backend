var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
const User = require('../models/users');
const jwt = require("jsonwebtoken")
const bcrypt = require('bcryptjs');




// Login Page

router.get('/login', function(req, res, next){
  res.render('login')
});


router.post("/signup", function(req,res,next) {
  bcrypt.hash(req.body.password, 10)
    .then(function(hash) {
      const user = new User ({
      username: req.body.username,
      password: hash,
      employeeFirstName: req.body.employeeFirstName,
      employeeLastName: req.body.employeeLastName,
      employeeCellNumber: req.body.employeeCellNumber,
      employeeID: req.body.employeeID
      });
      user.save(result => {
        res.status(201).json({
          message: "User Created",
          result: result
        });
      })
      .catch(err => {
        res.status(500).json({
          error: err
        });
      });
    });
});



module.exports = router;
