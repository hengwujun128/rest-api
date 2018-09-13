// server.js
var app = require('./app');
var port = process.env.PORT || 3000;
var server = app.listen(port, function () {
  console.log('Express server listening on port ' + port);
});
//  a server.js for spinning up the node server on a specific port of your choice