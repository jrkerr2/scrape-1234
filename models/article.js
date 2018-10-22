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
    unique: true,
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

  opinions: {
    type: String,
    trim: true
  },

  // reference comments related to article
  comments: {
    type: Schema.ObjectId,
    ref: 'Comment'
    
  }
});

// create a model from the above schema using the mongoose model method
var Article = mongoose.model("Article", ArticleSchema);

// export the model
module.exports = Article;