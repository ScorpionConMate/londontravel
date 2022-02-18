import { Router } from 'express';
import destinationController from '../controllers/destination.controller.js';
import { isAdmin, isAuth } from '../middlewares/auth.middleware.js';
import passport from 'passport';
const router = Router();

router.post('/', [isAuth, isAdmin], destinationController.save);

export default router;
