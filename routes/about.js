var express = require('express');
var router = express.Router();

/* GET about us page. */
router.get('/', function(req, res, next) {
  res.render('about', { title: 'About us' });
});

module.exports = router;