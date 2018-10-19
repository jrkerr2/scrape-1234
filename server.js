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

// set express server
var app = express();

// ***Configure middleware***
// Parse request body as JSON
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Make public a static folder
app.use(express.static("public"));


// set up templating engine
app.engine('handlebars', exphbs({defaulLayout: 'main'}));
app.set('view engine', 'handlebars');

var dbCon = "mongodb://root:root@192.168.99.100/scraped?authSource=admin";
mongoose.connect(dbCon, { useNewUrlParser: true }, function(error) {
  if (error) {
    console.log("Database _S-C-R-A-P-E-D_ Error:", error);
  }
  console.log("Connected to: " + dbCon)
});

// // This makes sure that any errors are logged if mongodb runs into an issue
// db.on("error", function(error) {
//   console.log("Database SCRAPED Error:", error);
// });


app.get('/website', function(req, res){
  request('https://www.prnewswire.com/news-releases/news-releases-list/', function(error, response, body){
    // res.send(body)
    var $ = cheerio.load(body);
    var urlObj = {};
    $('.story_title_container').each(function(){
      var url = $(this).children('div').children('div').children('a').attr('href')
      var title = $(this).children('div').children('div').children('a').children('span').children('span').text()
      array.push({title: title, url: url})
    })
    res.send(urlObj);
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