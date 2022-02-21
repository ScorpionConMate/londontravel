const { Router } = require('express');
const destinationController = require('../controllers/destination.controller.js');
const { isAdmin, isAuth } = require('../middlewares/auth.middleware.js');
const router = Router();

router.post('/', [isAuth, isAdmin], destinationController.save);

module.exports = router;
