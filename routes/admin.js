const express = require("express");
const router = express.Router();

// Require controller modules.
const adminController = require("../app/controllers/adminController");

/* [GET] register admin. */
router.get("/register", adminController.admin_register_get);

/* [POST] register admin. */
router.post("/register", adminController.admin_register_post);

/* [GET] login admin. */
router.get("/login", adminController.admin_login_get);

/* [POST] login admin. */
router.post("/login", adminController.admin_login_post);

/* [GET] logout admin. */
router.get("/logout", adminController.admin_logout_get);

module.exports = router;
