const express = require("express");
const router = express.Router();

/* GET home page. */
router.get("/", function (req, res, next) {
  return;
  res.status(200).render("home", { title: "Bầu Spa - Chăm sóc Mẹ & Bé" });
});

module.exports = router;
