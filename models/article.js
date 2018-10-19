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
    
  // `date` must be of type Date. The default value is the current date
  date: {
    type: Date,
    default: Date.now
  },

  // `longstring` must be of type String
  // `longstring` uses a custom validation function to only accept values 6 characters or more
  // A custom error message is thrown if the validation fails
  longstring: {
    type: String,
    validate: [
      // Function takes in the new `longstring` value to be saved as an argument
      function(input) {
        // If this returns true, proceed. If not, return the error message below
        return input.length >= 6;
      },
      // Error Message
      "Longstring should be longer."
    ]
  }
});

// This creates our model from the above schema, using mongoose's model method
var Article = mongoose.model("Article", ArticleSchema);

// Export the Example model
module.exports = Article;