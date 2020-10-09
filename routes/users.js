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
      employeeID: req.body.employeeID,
    
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


//patch route to change employeeDeleted from "false" to "true"
// router.delete("/api/users/:id", (req, res, next) => {
//   const user = new User({
//     _id: req.body.id,
//     employeeDeleted: "true"
//   });
//   User.updateOne({ _id: req.params.id }, user).then(result => {
//     console.log(result);
//     res.status(200).json({ message: "Update successful!" });
//   });
// });



router.get("/api/users", (req, res, next) => {
  User.find().then(documents => {
    res.status(200).json({
      message: "Users fetched successfully!",
      users: documents
    });
  });
});
module.exports = router;
