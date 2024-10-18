const controllers = require('./controllers'); // imports an entire folder! this is nothing new, we just haven't actually done it before.
// what this (^) actually does imports {folder}/index.js - lets us have files export, index import them and export them again, and then everything else import 1 file

const router = (app) => {
  app.get('/page1', controllers.page1); // when making a get request to the url /page1... return the page1 function.
  app.get('/page2', controllers.page2);
  app.get('/getName', controllers.getName);

  app.get('/', controllers.index);

  app.get('/*', controllers.notFound); // /* is the fallback. it should be LAST in the get requests, because express does things IN ORDER. * is a wildcard, so it means "anything" - if it's before other things it would return early and not call.

  app.post('/setName', controllers.setName);
};

module.exports = router;
