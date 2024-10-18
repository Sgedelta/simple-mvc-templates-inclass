const path = require('path');
const express = require('express');
const compression = require('compression');
const favicon = require('serve-favicon');
const bodyParser = require('body-parser');

const router = require('./router.js');

const port = process.env.PORT || process.env.NODE_PORT || 3000;

// Creates an "express app", which is our server
const app = express();

// Middleware functions - ORDER MATTERS!! that's how things are chained.
//  app.use says whenever someone goes to a url that starts with "/assets", they will be routed to express.static.
//  express.static says that these are static files, it will just return them - it does EVERYTHING in that folder if we give it a folder. even subfolders.
//  now we don't need to write an endpoint for EVERY file. that makes this a LOT easier - express can look at the file and know the content type, content length, other headers, etc etc.
app.use('/assets', express.static(path.resolve(`${__dirname}/../hosted/`))); //   Banjo is basically a GIANT static file hosting system, just like this! (it does some other stuff, but. yeah.)

// this does our favicon stuff. It will actually do everything we need for favicons, so we just give it the file we want as a favicon and it does the rest
app.use(favicon(`${__dirname}/../hosted/img/favicon.png`));

// app.use compression() compresses all files that are sent. makes things smaller and faster! does compression and decompression in the middleware
app.use(compression());

// this replaces our body parsing code. it is much faster and BETTER to do it this way. it auto populates req(uest).query and req(uest).body with parameters. (response is now res)
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// app.js is ONLY for middleware & setup - router is for routing to pages that we want. works like the url struct we set up.
router(app);

// actually starts the server.
app.listen(port, (err) => {
  if (err) { // if there's an error, just throw it and STOP the server.
    throw err;
  }
  console.log(`Listening on port ${port}`);
});
