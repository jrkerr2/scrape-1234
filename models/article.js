'use strict';

// Require mongoose
var mongoose = require("mongoose");

// reference to the mongoose Schema constructor
var Schema = mongoose.Schema;

// create a new ArticleSchema object
var ArticleSchema = new Schema({
  // required fields for the scraped article
  link: {
    type: String,
    trim: true,
    required: "Link is Required"
  },

  title: {
    type: String,
    trim: true,
    required: "Title is Required"
  },

  summary: {
    type: String,
    trim: true,
    required: "Summary is Required"
  },
    
  // OPTIONAL fields
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