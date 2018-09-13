// UserController.js
var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');

router.use(bodyParser.urlencoded({
  extended: true
}));
router.use(bodyParser.json());

// 
var User = require('./User');

// ADD THIS PART
// CREATES A NEW USER
router.post('/', function (req, res) {
  User.create({
      name: req.body.name,
      email: req.body.email,
      password: req.body.password
    },
    function (err, user) {
      if (err) return res.status(500).send("There was a problem adding the information to the database.");
      res.status(200).send(user);
    });
});
// RETURNS ALL THE USERS IN THE DATABASE
router.get('/', function (req, res) {
  // Find is a method which returns values from the database. Its first parameter, an object, defines the requirements which must be fulfilled in order to return values
  User.find({}, function (err, users) {
    if (err) return res.status(500).send("There was a problem finding the users.");
    res.status(200).send(users);
  });
});









module.exports = router;

// Above is the bare layout of the user controller.

// The body-parser module is used as a middleware to handle data in a more elegant way. This will come in handy when sending data through HTTP requests using forms.