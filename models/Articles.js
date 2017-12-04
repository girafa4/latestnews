// *************
// DEPENDENCIES //
//**************

var mongoose = require('mongoose');

// create a Schema class
var Schema = mongoose.Schema;
    //ObjectId = ArticleSchema.ObjectId;
 
 // create article Schema
var ArticleSchema = new Schema({
    //author    : ObjectId,
    title: {
    	type: String,
    	required: true

    },
    link:  {
    	type: String,
    	required: true

    },
    date: {
		type: Date,
		date: Date
	}
});

// Create the Article model with the ArticleSchema
var Article = mongoose.model('Article', ArticleSchema);

module.exports = Article;
