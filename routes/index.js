const homeRoute = require("./home");
const introRoute = require("./intro");
const servicesRoute = require("./services");
const postsRoute = require("./posts");
const adminRoute = require("./admin");
const { checkUser } = require("../app/middlewares/authMiddleware");

function route(app) {
  app.use("*", checkUser);

  app.use("/", homeRoute);

  app.use("/gioi-thieu", introRoute);

  app.use("/services", servicesRoute);

  app.use("/posts", postsRoute);

  app.use("/admin", adminRoute);
}

module.exports = route;
