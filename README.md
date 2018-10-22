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
- Navigate to the URL via localhost: <link here>

## Technical Debt

## Requirements met
- scrape headlines (*)
- save headlines, links, and summaries to Mongo database via Mongoose (*)
- display DB-extracted headlines to users
- allow user to save comments, associate with articles, and then delete comments (*)
- allow all users to see all articles and all comments (*)
- do not clear database on every scrape (*)
- do not insert duplicate articles into database (*)

## Requiremtns not met
- deploy to Heroku with mLab (a credit card is required with DBs)
