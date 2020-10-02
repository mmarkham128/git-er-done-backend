var express = require('express');
const nodemon = require('nodemon');
var router = express.Router();
const querystring = require('querystring');
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

//get all posts where job completed is true

router.get('/api/posts/view', function (req,res,next){
  let jobCompleted= req.query.jobCompleted
  console.log(req.query.jobCompleted)
  
  Post.find({
    jobCompleted: jobCompleted
  }
    
  ).then( documents => {
    res.status(200).json({
      message: "Posts fetched succesfully!!!!!!",
      posts: documents
    })
  })
  
});

//create a new post

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

  // edit a specific post by id
router.put("/api/posts/:id", (req, res, next) => {
  const post = new Post({
    _id: req.body.id,
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
  Post.updateOne({ _id: req.params.id }, post).then(result => {
    console.log(result);
    res.status(200).json({ message: "Update successful!" });
  });
});










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
  const user = new User({
    employeeFirstName: req.body.employeeFirstName,
    employeeLastName: req.body.employeeLastName,
    employeeCellNumber: req.body.employeeCellNumber,
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


router.post("/api/users", (req, res, next) => {
  const user = new User({
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