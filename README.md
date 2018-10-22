# NPR News Scraper (in progress 10/22/18)

## Description
This application is designed to scrape news stories from a pre-determined news feed, present those headlines with summaries to the user, then to allow user comments associated with those headline/summaries.

## Technologies used
- Node & Express servers
- Mongo DB
- Mongoose
- Handlebars
- Cheerio
- Request
- Body Parser

## Installation & use
- Run a MongoDB with Mongoose installed as ODM (developed using a Docker instance of Mongo)
- Press `Scrape` button to update to the latest NPR articles (latest 10)
- Read the provided summaries, clink on any desired links
- Add or delete comments as needed/desired
- Navigate to the URL via localhost: <link here>

## Technical Debt

## Requirements met
- scrape headlines from external soure (*)
- save headlines, links, and summaries to Mongo database via Mongoose (*)
- display DB-extracted headlines to users
- allow user to save comments, associate with articles, and then delete comments (*)
- allow all users to see all articles and all comments (*)
- do not clear database on every scrape (*)
- do not insert duplicate articles into database (*)

## Requirements not met
- deploy to Heroku with mLab (a credit card is required with DBs)
