var mongoose = require('mongoose');
var Schema = mongoose.Schema,
    ObjectId = ArticleSchema.ObjectId;
 
var ArticleSchema = new Schema({
    author    : ObjectId,
    title     : String
    
});