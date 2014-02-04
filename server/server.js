// The App
var express = require("express");
var passport = require('passport');
var path = require('path');

// Create the express server
var app = express();

// Get route with multiple middleware
app.get("/", function (req, res, next) {
  res.sendfile(path.join(__dirname, '../public/index.html'));
});

app.use(function(req, res, next){
  res.send(404, 'page not found');
});

// Create HTTP server with your app
var http = require("http");
var server = http.createServer(app)

// Listen to port 3000 
server.listen(3000);
console.log("Express server listening on port: 3000");

// Database connection
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/test');

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function callback () {
  console.log("Connected to the MongoDB through Mongoose!");
});