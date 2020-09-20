var express = require('express');
var router = express.Router();
const Post = require("../models/posts");
const User = require("../models/users")

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});



router.get("/api/posts", (req, res, next) => {
  Post.find().then(documents => {
    res.status(200).json({
      message: "Posts fetched successfully!",
      posts: documents
    });
  });
});

router.get('/api/users', function(req, res, next) {
  User.find().then(documents => {
    res.status(200).json({
      message: "Users fetched went well!",
      users: documents
    });
  });
});

module.exports = router;