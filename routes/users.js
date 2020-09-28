var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
const user = require('../models/users')
var db = mongoose.connection


// Login Page

router.get('/login', function(req, res, next){
  res.render('login')
})

router.post('/api/users', function(req, res, next) {
  // user
  //   .findOne({
  //     where: {
  //       username: req.body.username,
  //       password: req.body.password
  //     }
  //   })
  //   .then(user => {
  //     if (user) {
  //       res.send('Login succeeded!');
  //       console.log("YAYYYY");
  //     } else {
  //       res.send('Invalid login!');
  //       console.log("NOOOOO");
  //     }
  //   });
});

// IM STOOPID   (ノಠ益ಠ)ノ彡┻━┻ 

router.post('/login', function(req,res,next) {
  db.collection('users').findOne({
          username: req.body.email,
          password: req.body.password
        }
      )
      .then(user => {
        if (user) {
          res.send(user);
          console.log("YAYYYY");
        } 
        else {
          res.send('Invalid login!');
          console.log("NOOOOO");
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
