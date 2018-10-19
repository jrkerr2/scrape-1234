'use strict';

// Require mongoose
var mongoose = require("mongoose");

// reference to the mongoose Schema constructor
var Schema = mongoose.Schema;

// create a new ArticleSchema object
var ArticleSchema = new Schema({
  // url is a required field for the link to the scraped article
  url: {
    type: String,
    trim: true,
    required: "String is Required"
  },
    
  // date article scraped; default value = current date
  date: {
    type: Date,
    default: Date.now
  },

  // reference comments related to article
  comments: {
    type: Schema.ObjectId,
    ref: 'Comment'
    
  }
});

// This creates our model from the above schema, using mongoose's model method
var Article = mongoose.model("Article", ArticleSchema);

// Export the Example model
module.exports = Article;