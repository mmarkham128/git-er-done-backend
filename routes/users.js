var express = require('express');
var router = express.Router();
const User = require("../models/users")

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render('users')
});


// Login Page

router.get('/login', function(req, res, next) {
  res.render('login');
});

router.post('/login', function(req, res, next) {
  models.users
    .findOne({
      where: {
        Email: req.body.email,
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