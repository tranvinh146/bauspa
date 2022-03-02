var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Service' });
});

/* GET anout us page. */
router.get('/about-us', function(req, res, next) {
  res.render('index', { title: 'Service' });
});

module.exports = router;
