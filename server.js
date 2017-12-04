//////////////////
// DEPENDENCIES //
//////////////////

var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var logger = require('morgan');
var mongoose = require('mongoose');
var request = require('request');
var cheerio = require('cheerio');

// Use morgan and bodyParser wit app
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
	extended: false
}));

// make public a static directory
app.use(express.static('public'));

// database configuration with mongoose
mongoose.connect('mongodb://localhost/nytreact');

var db = mongoose.connection;

// show any mongoose errors
db.on('error', function(err) {
	console.log('Mongoose Error: ', err);
});

// once logged in to the db through mongoose, log a success message
db.once('open', function() {
	console.log('Mongoose connection successful.');
});

// bring in models
var Article = require('./models/Article.js');


////////////
// ROUTES //
////////////

// main index route
app.get('/', function(req, res) {
	res.send('./public/index.html');
});

app.get('/api/saved', function(req, res) {
	Article.find({}, function(err, doc) {
		if (err) {
			console.log(err);
		} else {
			res.json(doc);
		}
	});
});

app.post('/api/saved', function(req, res) {

})


// listen on port 3000
app.listen(process.env.PORT || 3000, function() {
	console.log('App running on port 3000');
});