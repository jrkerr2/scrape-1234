# TOP 10 NPR News Scraper (in progress 10/24/18)

## Description
This application is designed to present a limited scrape from the NPR news feed, present those headlines with summaries to the user (from the Mongo database), then allow the user to comment to associated headlines/summaries.

## Technologies used
- Node & Express servers
- Mongo DB
- Mongoose
- Handlebars
- Cheerio
- Request
- Body Parser

## Installation & use
- use Node/Express to set up server side, middleware, etc. (see source code here for details)
- Run a MongoDB with Mongoose installed as ODM (developed using a Docker instance of Mongo)
- Click `Update NPR News` button to update to the latest NPR articles (latest 10)
- Read the provided summaries, clink on any desired links
- Add or delete comments as needed/desired
- Navigate to the URL via localhost: <http://localhost:3000/>

## Technical Debt
- Comment inserts are not working yet; delete will be added later
- main.handlebars not engaging (?)
- redirect from scrape intermittently fails
- no indication to user that new articles are retrieved nor that new articles are not available
- .push conditional for article object array suspect; may need refactoring

## Requirements met
- scrape headlines from external soure (*) `npr.org`
- save headlines, links, and summaries to Mongo database via Mongoose (*) `save made to mongo via mongoose odm`
- display DB-extracted headlines to users `root path displays articles from db`
- use 
- allow user to save comments, associate with articles, and then delete comments (*) `currently under repair`
- allow all users to see all articles and all comments (*) `currently under repair `
- do not clear database on every scrape (*) `just don't`
- do not insert duplicate articles into database (*) `dupes not allowed on link attr in schema design`

## Requirements not met
- deploy to Heroku with mLab (a credit card is required with DBs)
- link from Profile (in progress 10/23/18)
