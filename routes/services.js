const express = require("express");
const router = express.Router();
const service_controller = require("../app/controllers/serviceController");
const upload = require("../app/middlewares/uploadMiddleware");

/* [GET] services page. */
router.get("/", service_controller.service_home);

router
  .route("/service")
  .get(service_controller.service_create_get)
  .post(upload.single("image"), service_controller.service_create_post);

/* [GET] service detail page */
router.get("/:slug", service_controller.service_detail);

module.exports = router;
