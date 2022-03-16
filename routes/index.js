const homeRoute = require('./home');
const aboutRoute = require('./about');
const servicesRoute = require('./services');
const postsRoute = require('./posts');
const adminRoute = require('./admin');
const { checkUser } = require('../app/middlewares/authMiddleware');

function route(app) {
  app.get('*', checkUser);

  app.use('/', homeRoute);

  app.use('/about-us', aboutRoute);

  app.use('/services', servicesRoute);

  app.use('/posts', postsRoute);

  app.use('/admin', adminRoute);
}

module.exports = route;
