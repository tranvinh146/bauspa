const homeRoute = require("./home");
const introRoute = require("./intro");
const servicesRoute = require("./services");
// const postsRoute = require("./posts");

function route(app) {
  app.use("/", homeRoute);

  app.use("/gioi-thieu", introRoute);

  app.use("/services", servicesRoute);

  // app.use("/posts", postsRoute);
}

module.exports = route;
