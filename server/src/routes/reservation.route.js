import { Router } from 'express';
import reservationController from '../controllers/reservation.controller.js';
import { isAuth, isStaff } from '../middlewares/auth.middleware.js';
const router = Router();

router.post('/', [isAuth, isStaff], reservationController.createCode);
router.get('/my-reservations', [isAuth, isStaff], reservationController.myReservations);
router.get('/:id', [isAuth, isStaff], reservationController.getReservation);
router.put('/set-room/:roomId', reservationController.setRoom);

export default router;
