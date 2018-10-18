var express = require('express')
var bodyParser = require('body-parser')
var cheerio = require('cheerio')
var request = require('request')
var mongoose = require('mongoose')
var exphbs = require('express-handlebars')

var app = express()

app.engine('handlebars', exphbs({defaulLayout: 'main'}))
app.set('view engine', 'handlebars')



app.get('/website', function(req, res){
  request('https://www.quora.com/profile/Pamela-Salon-Syntactics-Inc', function(error, response, body){
    // res.send(body)
    var $ = cheerio.load(body)
    var array = []
    $('.story_title_container').each(function(){
      var url = $(this).children('div').children('div').children('a').attr('href')
      var title = $(this).children('div').children('div').children('a').children('span').children('span').text()
      array.push({title: title, url: url})
    })
    res.send(array)
  })
})

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



// // normally comes from db
// var data = [
//   {
//     title: "great article",
//     url: "http://google.com",
//     summary: 'this is so amazing .... check it out!'
//   },
//   {
//     title: "great article 2",
//     url: "http://google.com",
//     summary: 'this is so amazing .... check it out!!!!'
//   },
//   {
//     title: "great article 3",
//     url: "http://google.com",
//     summary: 'this is so amazing .... check it out! !!!!!!'
//   }
// ]

//routes
app.get('/', function(req,res){
  res.render('index', {items: data})
})

app.get('/data', function(req,res){
  res.json(data)
})


// Set the app to listen on port 3000
app.listen(process.env.PORT || 3000, function() {
    console.log("App running on JOHN's port 3000!");
  });