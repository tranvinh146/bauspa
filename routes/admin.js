var express = require('express');
var router = express.Router();

// Require controller modules.
var admin_controller = require('../app/controllers/adminController');

/* [GET] register admin. */
router.get('/register', admin_controller.admin_register_get);

/* [POST] register admin. */
router.post('/register', admin_controller.admin_register_post);

/* [GET] login admin. */
router.get('/login', admin_controller.admin_login_get);

/* [POST] login admin. */
router.post('/login', admin_controller.admin_login_post);

/* [GET] logout admin. */
router.get('/logout', admin_controller.admin_logout_get);

/* [GET] dashboard. */
router.get('/dashboard', admin_controller.admin_dashboard);


module.exports = router;
