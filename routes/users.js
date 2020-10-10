var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
const User = require('../models/users');
const jwt = require("jsonwebtoken")
const bcrypt = require('bcryptjs');
const jtw = require('jsonwebtoken')




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

router.post("/login", function(req,res,next) {
  let fetchedUser;
  User.findOne({ username: req.body.username })
  .then(user => {
    console.log(user);
    if (!user) {
      return res.status(401).json({
        message: "Login Failed"
      });
    }
    fetchedUser = user
    return bcrypt.compare(req.body.password, user.password)
  })
  .then(result => {
    if (!result) {
      return res.status(401).json({
        message: "Login Failed"
      })
    }
    const token = jtw.sign({username: fetchedUser.username, id: fetchedUser.id}, 
      'secretkey', 
      {expiresIn: '1h'}
      );
      res.status(200).json({
        token: token,
        message: "Login Successful"
      })
  })
  .catch(err => {
    return res.status(401).json({
      message: "Login Failed"
    });
  })
})


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
