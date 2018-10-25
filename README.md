# TOP 10 NPR News Scraper

## Description
This application is designed to present a limited scrape from the NPR news feed, present those headlines with summaries to the user (from the Mongo database), then allow the user to comment to associated headlines/summaries.

## Technologies Used
- Node & Express servers
- Mongo DB
- Mongoose
- Handlebars
- Cheerio
- Request
- Body Parser
- Bootstrap 4

## Installation & Use
- use Node/Express to set up server side, middleware, etc. (see source code here for details)
- Run a MongoDB with Mongoose installed as ODM (developed using a Docker instance of Mongo)
- Navigate to the URL via localhost: <http://localhost:3000/>
- Click `Update NPR News` button to update to the latest NPR articles (latest 10)
- Read the provided summaries, clink on any desired links
- Add or delete comments as needed/desired

## Technical Debt
- Comment inserts are not working yet; `put route working through Postman, but not through comments form`
- Delete comments functionality not yet added `nice to have: delete only by auth user`
- main.handlebars not engaging (?)
- no indication to user that new articles are retrieved nor that new articles are not available (sort with ID?)
- modal data passing not working with IDs, only classes; Bootstrap formatting deprecated as a result
- comment data not cleared after modal close

## Requirements Met
- scrape headlines from external soure (*) `npr.org`
- save headlines, links, and summaries to Mongo database via Mongoose (*) `save made to mongo via mongoose odm`
- display DB-extracted headlines to users `root path displays articles from db`
- allow user to save comments, associate with articles, and then delete comments (*) `currently under repair`
- allow all users to see all articles and all comments (*) `currently under repair `
- do not clear database on every scrape (*) `just don't`
- do not insert duplicate articles into database (*) `dupes not allowed on link attr in schema design`

## Requirements Not Met
- deploy to Heroku with mLab (a credit card is required with DBs; `showstopper`)
- link from Profile (will not advertise unless complete and deployed)
