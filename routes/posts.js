var express = require('express');
var router = express.Router();

/* GET posts page. */
router.get('/', function(req, res, next) {
  res.render('post/post_home', { title: 'Posts' });
});

module.exports = router;
