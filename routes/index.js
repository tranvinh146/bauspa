const homeRoute = require("./home");
const introRoute = require("./intro");
const servicesRoute = require("./services");
// const postsRoute = require("./posts");

function route(app) {
  app.use("/", homeRoute);

  app.use("/vi-sao-nen-su-dung-dich-vu-cham-soc-me-va-be", introRoute);

  app.use("/dich-vu", servicesRoute);

  // app.use("/posts", postsRoute);
}

module.exports = route;
