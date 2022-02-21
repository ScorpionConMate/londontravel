const { Router } = require('express');
const userController = require('../controllers/user.controller.js');
const router = Router();

router.post('/', userController.create);
router.get('/', userController.find);
router.get('/:id', userController.findOne);

module.exports = router;
