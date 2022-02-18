import { Router } from 'express';
import userController from '../controllers/user.controller.js';
const router = Router();

router.post('/', userController.create);
router.get('/', userController.find);
router.get('/:id', userController.findOne);

export default router;
