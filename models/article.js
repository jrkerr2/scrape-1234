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
    
  
  // date article scraped; default value = current date
  date: {
    type: Date,
    default: Date.now
  },

  // OPTIONAL fields
  // flat-file-type representation of commments related to parent article
  notes: [{ 
    comment: { type: String },
    posted: { type: Date, default: Date.now },
    user: { type: String, default: "anonymous" }
  
  }]

  // // reference comments schema - related to article
  // comments: {
  //   type: Schema.ObjectId,
  //   ref: 'Comment'
    
  // }
});

// create a model from the above schema using the mongoose model method
var Article = mongoose.model("Article", ArticleSchema);

// export the model
module.exports = Article;