const homeRoute = require('./home');
const aboutRoute = require('./about');
const servicesRoute = require('./services');
const postsRoute = require('./posts');

function route(app) {
  app.use('/', homeRoute);

  app.use('/about-us', aboutRoute);

  app.use('/services', servicesRoute);

  app.use('/posts', postsRoute);
}

module.exports = route;
