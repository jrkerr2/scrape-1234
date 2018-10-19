'use strict';

// Require mongoose
var mongoose = require("mongoose");

// reference to the mongoose Schema constructor
var Schema = mongoose.Schema;

// create a new CommentSchema object
var CommentSchema = new Schema({
  
  // commentText is an optional field for a user-added comment to the article; 
  // one article may have many commentS
  commentText: {
    type: String,
    
  },
    
  // date comment submitted; default value = current date
  date: {
    type: Date,
    default: Date.now
  },

  // reference article related to comment
  article: {
    type: Schema.ObjectId,
    ref: 'Article'    
  }
});

// This creates our model from the above schema, using mongoose's model method
var Comment = mongoose.model("Comment", CommentSchema);

// Export the Example model
module.exports = Comment;