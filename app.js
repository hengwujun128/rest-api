// app.js 
var express = require('express');
var app = express();
var db = require('./db'); //ADD THIS LINE


// ADD THESE TWO LINES
var UserController = require('./user/UserController');
app.use('/users', UserController);
module.exports = app;

// An app.js for configuring the application