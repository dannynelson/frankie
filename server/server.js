// The App
var express = require("express");
var app = express();

// Use static middleware
app.use(express.static(__dirname + '/public'));

// Middleware with error
app.use(function(req, res, next){
  // do something with the request or response
  next('something went wrong');
});

// Use the router middleware
app.use(app.router);

// Get route with multiple middleware
app.get("/", function (req, res, next) {
  // Do something with request or response
  next();
}, function (req, res) {
  res.render('view');
});

app.use(function(req, res, next){
  res.send(404, 'page not found');
});

// Create HTTP server with your app
var http = require("http");
var server = http.createServer(app)

// Listen to port 3000 
console.log("Express server listening on port: 3000");
server.listen(3000);

var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/test');

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function callback () {
  console.log("Connected to the MongoDB through Mongoose!");
});
