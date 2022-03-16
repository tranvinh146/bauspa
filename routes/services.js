const express = require('express');
const router = express.Router();
const service_controller = require('../app/controllers/serviceController');
const { requireAuth } = require('../app/middlewares/authMiddleware');
const upload = require('../app/middlewares/uploadMiddleware');

/* [GET] services page. */
router.get('/', service_controller.service_home);

/* [GET] create service form. */
router.get('/create', requireAuth, service_controller.service_create_get);

/* [POST] handle creating service form. */
router.post('/create', requireAuth, upload.single('image'), service_controller.service_create_post);

module.exports = router;
