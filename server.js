var express = require('express')
var bodyParser = require('body-parser')
var mongoose = require('mongoose');
var cheerio = require('cheerio');
var request = require('request');
var app = express()
var PORT = process.env.PORT || 3001;
 
 //Body-Parser Code 
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false })) 
// parse application/json
app.use(bodyParser.json())
mongoose.connect('mongodb://localhost/latestnews');
var db = mongoose.connection;
db.on("error", function(error) {
  console.log("Mongoose Error: ", error);
});

db.once("open", function() {
  console.log("Mongoose connection successful.");
});

//Routes
app.get('/', function (req, res) {
  res.send('Hello World')
})
 
 app.get('/scrape', function(req, res){
 	request('http://www.nytimes.com', function (error, response, body) {
  console.log('error:', error); // Print the error if one occurred
  console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
  console.log('body:', body); // Print the HTML for the Google homepage.
});

 })
app.listen(PORT, function() {
	console.log("listening on port: " + PORT )
});

 
