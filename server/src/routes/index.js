import { Router } from 'express';
import users from './user.route.js';
import auth from './auth.route.js';
import destinations from './destination.route.js';
import reservations from './reservation.route.js';
import { isAdmin, isAuth } from '../middlewares/auth.middleware.js';

const router = Router();

router.use('/users', users);
router.use('/auth', auth);
router.use('/destinations', destinations);
router.use('/reservations', reservations);

router.get('/test', [isAuth, isAdmin], (req, res) => {
    res.send('test');
})
export default router;
