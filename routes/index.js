var express = require('express');
const nodemon = require('nodemon');
var router = express.Router();
const querystring = require('querystring');
const Post = require("../models/posts");
const User = require("../models/users")
const checkAuth = require("../middleware/check-auth");
const { check } = require('express-validator');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});


//get a list of posts
router.get("/api/posts", checkAuth, (req, res, next) => {
  Post.find().then(documents => {
    res.status(200).json({
      message: "Posts fetched successfully!",
      posts: documents
    });
  });
});

// get a post by id

router.get("/api/posts/view/:id", checkAuth, (req, res, next) => {
  Post.findById(req.params.id).then(post => {
    if (post) {
      res.status(200).json(post);
    } else {
      res.status(404).json({ message: "Post not found!" });
    }
  });
});




//get all posts where job completed is true
//route that takes you to view all posts where jobCompleted is true or false, depending on the query

router.get('/api/posts/viewalljobs', checkAuth, function (req,res,next){
  let jobDeleted= req.query.jobDeleted //query the portion of the DB that holds the jobCompleted info and finds either a value of true or false b/c of it being a boolean
  console.log(req.query.jobDeleted)
  Post.find({   
    jobDeleted: jobDeleted  //using the Post model to find a post where jobCompleted is equal to the query of either true or false (based on the let above)
  })
  .then( documents => {
    res.status(200).json({   //display will be json and display "posts fetched succesfully" on localhost 3000 and posts the information requested (depending on the true or false query)
      message: "Posts fetched succesfully!!!!!!",
      posts: documents
    })
  })
  
});


//get all posts where job completed is true
//route that takes you to view all posts where jobCompleted is true or false, depending on the query
router.get('/api/posts/viewcompletedjobs', checkAuth, function (req,res,next){
  //query the portion of the DB that holds the jobCompleted info and finds either a value of true or false b/c of it being a boolean
  // let jobDeleted= req.body.jobDeleted
  let jobCompleted= req.query.jobCompleted
  console.log(req.query.jobCompleted)
  
  //using the Post model to find a post where jobCompleted is equal to the query of either true or false (based on the let above)
  Post.find({
    jobCompleted:jobCompleted
  }
  ).then( documents => {
    res.status(200).json({
      message: "Posts fetched succesfully!!!!!!",
      posts: documents
    })
  })
  
});


//create a new post
router.post("/api/posts", checkAuth, (req, res, next) => {
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
router.put("/api/posts/:id", checkAuth, (req, res, next) => {
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


//patch route to change jobDeleted from "false" to "true"
router.delete("/api/posts/:id", checkAuth, (req, res, next) => {
  const post = new Post({
    _id: req.params.id,
    jobDeleted: "true"
  });
  Post.updateOne({ _id: req.params.id }, post).then(result => {
    console.log(result);
    res.status(200).json({ message: "Update successful!" });
  });
});


//patch route to change jobCompleted from "false" to "true"
router.delete("/api/posts/complete/:id", (req, res, next) => {
  const post = new Post({
    _id: req.params.id,
    jobCompleted: "true"
  });
  Post.updateOne({ _id: req.params.id }, post).then(result => {
    console.log(result);
    res.status(200).json({ message: "Update successful!" });
  });
});


module.exports = router;