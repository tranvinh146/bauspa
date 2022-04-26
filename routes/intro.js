const express = require("express");
const router = express.Router();
const IntroController = require("../app/controllers/introController");

/* GET intro us page. */
router.get("/", IntroController.getIntro);
router.post("/", IntroController.createIntro);

module.exports = router;
