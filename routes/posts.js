var express = require('express');
var router = express.Router();

/* GET posts page. */
router.get('/', function(req, res, next) {
  res.render('posts/index', { title: 'Posts' });
});

module.exports = router;
