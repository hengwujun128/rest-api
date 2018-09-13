// User.js
var mongoose = require('mongoose');

// We’re creating a schema which will give every user in the database a specific look.
var UserSchema = new mongoose.Schema({
  name: String,
  email: String,
  password: String
});
// We’re binding the layout of the schema to the model which is named 'User'
mongoose.model('User', UserSchema);
module.exports = mongoose.model('User');