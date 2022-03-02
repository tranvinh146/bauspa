var express = require('express');
var router = express.Router();

/* GET service page. */
router.get('/', function(req, res, next) {
  res.render('service/index', { title: 'Service' });
});

module.exports = router;
