var express = require('express');
var bodyParser = require('body-parser');
var cheerio = require('cheerio');
var request = require('request');
var mongojs = require('mongojs');
var mongoose = require('mongoose');
var exphbs = require('express-handlebars');

var app = express();

app.engine('handlebars', exphbs({defaulLayout: 'main'}));
app.set('view engine', 'handlebars');

// Database configuration
// Save the URL of our database as well as the name of our collection
var databaseUrl = "root:root@192.168.99.100/john_test?authSource=admin";
var collections = ["testCollect"];

// Use mongojs to hook the database to the db variable
var db = mongojs(databaseUrl, collections);

// This makes sure that any errors are logged if mongodb runs into an issue
db.on("error", function(error) {
  console.log("Database JOHN_TEST Error:", error);
});



app.get('/website', function(req, res){
  request('https://www.quora.com/profile/Pamela-Salon-Syntactics-Inc', function(error, response, body){
    // res.send(body)
    var $ = cheerio.load(body)
    var urlArray = []
    $('.story_title_container').each(function(){
      var url = $(this).children('div').children('div').children('a').attr('href')
      var title = $(this).children('div').children('div').children('a').children('span').children('span').text()
      array.push({title: title, url: url})
    })
    res.send(urlArray);
  })
});


//GET routes
app.get('/', function(req,res){
  res.send("JOHN test! 5");

});

app.get("/all", function(req, res) {
  // Query: In our database, go to the animals collection, then "find" everything
  db.testCollect.find({}, function(error, found) {
    // Log any errors if the server encounters one
    if (error) {
      console.log(error);
    }
    // Otherwise, send the result of this query to the browser
    else {
      res.json(found);
    }
  });
});

app.get('/data', function(req,res){
  res.json(data)
});

// POST routes
app.post("/addExample", function(req, res) {
  // Query: In our database, go to the animals collection, then "find" everything
  db.testCollect.find({}, function(error, found) {
    // Log any errors if the server encounters one
    if (error) {
      console.log(error);
    }
    // Otherwise, send the result of this query to the browser
    else {
      res.json(found);
    }
  });
});

app.post('/add', (req, res, next) => {

  var name = {
    first_name: req.body.first_name,
    last_name: req.body.last_name
  };

  dbase.collection("name").save(name, (err, result) => {
    if(err) {
      console.log(err);
    }

    res.send('name added successfully');
  });
});

// Set the app to listen on port 3000
app.listen(process.env.PORT || 3000, function() {
    console.log("App running on JOHN's port 3000!");
  });