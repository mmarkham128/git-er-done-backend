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


//patch route to change employeeDeleted from "false" to "true"
router.patch("/api/users/:id", (req, res, next) => {
  const user = new User({
    _id: req.body.id,
    employeeDeleted: "true"
  });
  User.updateOne({ _id: req.params.id }, user).then(result => {
    console.log(result);
    res.status(200).json({ message: "Update successful!" });
  });
});


module.exports = router;
