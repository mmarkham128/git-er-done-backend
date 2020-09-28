var express = require('express');
var router = express.Router();
const Post = require("../models/posts");
const User = require("../models/users")

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});


//get a list of posts
router.get("/api/posts", (req, res, next) => {
  Post.find().then(documents => {
    res.status(200).json({
      message: "Posts fetched successfully!",
      posts: documents
    });
  });
});

router.post("/api/posts", (req, res, next) => {
  const post = new Post({
    businessName: req.body.businessName,
    contactFirstName: req.body.contactFirstName,
    contactLastName: req.body.contactLastName,
    contactMainPhoneNumber: req.body.contactMainPhoneNumber,
    contactStreet: req.body.contactStreet,
    contactCity: req.body.contactCity,
    contactState: req.body.contactState,
    contactZip: req.body.contactZip,
    employeeFirstName: req.body.employeeFirstName,
    employeeLastName: req.body.employeeLastName,
    jobNotes: req.body.jobNotes,
    employeeID: req.body.employeeID,
    jobCompleted: req.body.jobCompleted,
    jobDeleted: req.body.jobDeleted
  });
  post.save().then(createdPost => {
    res.status(201).json({
      message: "Post added successfully",
      postId: createdPost._id
    });
  });});

//get a list of users
router.get('/api/users', function(req, res, next) {
  User.find().then(documents => {
    res.status(200).json({
      message: "Users fetched went well!",
      users: documents
    });
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