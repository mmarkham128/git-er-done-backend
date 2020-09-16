var express = require('express');
var router = express.Router();
const User = require("../models/users")

/* GET users listing. */
router.get('/', function(req, res, next) {
  User.find().then(documents => {
    res.status(200).json({
      message: "Users fetched went well!",
      users: documents
    });
  });
});


// Login Page

router.get('/login', function(req, res, next) {
  res.render('login');
});

router.post('/login', function(req, res, next) {
  models.users
    .findOne({
      where: {
        Username: req.body.username,
        Password: req.body.password
      }
    })
    .then(user => {
      if (user) {
        res.send('Login succeeded!');
      } else {
        res.send('Invalid login!');
      }
    });
});

module.exports = router;