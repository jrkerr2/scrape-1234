// require package dependencies
var express = require('express');
var bodyParser = require('body-parser');
var cheerio = require('cheerio');
var request = require('request');
var mongoose = require('mongoose');
var exphbs = require('express-handlebars');

// require schema
var Comment = require('./models/comment')
var Article = require('./models/article')

// set up express server
var app = express();

// ***Configure middleware***
// Parse request body as JSON
app.use(express.urlencoded({ extended: true }));
app.use(bodyParser);
app.use(express.json());

// Make public a static folder
// app.use(express.static("public"));


// set up templating engine
app.engine('handlebars', exphbs({ defaulLayout: 'main'} ));
app.set('view engine', 'handlebars');

var dbCon = "mongodb://root:root@192.168.99.100/scraped?authSource=admin";
mongoose.connect(dbCon, { useNewUrlParser: true }, function(error) {
  if (error) {
    console.log("Database _S-C-R-A-P-E-D_ Error:", error);
  }
  console.log("Connected to: " + dbCon)
});

// GET routes
app.get('/website', function(req, res){
  console.log("got to beginning of scrape route");
  request('https://npr.org/', function(error, response, body){
    var $ = cheerio.load(body);
    var resultsArray = [];
       
    $('.story-text').each(function(){   
      var result = {};
      
      result.link = $(this).children('a').attr('href');
      result.title = $(this).children('a').children('h3').text();
      result.summary = $(this).children('a').children('p').text();
    
      if (!(result.link == '' || result.title == '' || result.summary == '')) {
        resultsArray.push(result);
      }      
    });
    
    resultsArray.slice(0,10).forEach(function(doc) {
      var article = new Article(doc);
      
      // save each to the db
      article.save(function(err, doc) { 
        // log any errors
        if (err) {
          console.log(err);
          console.log("DB documents *** NOT *** saved");
        }
        // or log the document and report success
        else {
          console.log(doc);
          console.log("DB documents saved");
        }
      });
    });
    // re-direct to the ALL route after the scrape & save
    console.log("got to end of scrape route");
    res.redirect('/');
    
  })
});

app.get('/find/:_id', function(req, res){
  var _id = req.params._id
  Article.findOne({_id: _id}, function (err, article) { 
    if (!article) {
      console.log(err);
      console.log("Document not found");
    }
    else {
      res.send(article);      
    }
  
  });
});

app.get('/all', function(req, res){
  Article.find({}, function(error, doc) {
    // Log any errors
    if (error) {
      console.log(error);
    }
    // Or send the doc to the browser as a json object
    else {
      res.send(doc);
    };
  });
});

app.get('/', function(req, res){  
  Article.find({}, function(error, doc) {
    // Log any errors
    if (error) {
      console.log(error);
    }
    // Or send the doc to the browser as a json object
    else {
      res.render( "index", { items:doc } )
    };
  });
});

// PUT (UPDATE) routes
app.put('/comments/:_id', function(req, res) {
  console.log("Doing PUT stuff");
  Article.findByIdAndUpdate(req.params._id, req.body, function (err, article) {
    if (!article) {
      console.log(err);
    }
    else {
      res.redirect('/all');
    }
  });

  
});

// POST routes
app.post("/addExample", function(req, res) {
  db.testCollect.find({}, function(error, found) {
    // Log any errors
    if (error) {
      console.log(error);
    }
    // Otherwise send the result to the browser
    else {
      res.json(found);
    }
  });
});

// Set the app to listen on port 3000
app.listen(process.env.PORT || 3000, function() {
    console.log("App running on JOHN's port 3000!");
  });