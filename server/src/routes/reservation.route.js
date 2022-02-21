const { Router } = require('express');
const reservationController = require('../controllers/reservation.controller.js');
const { isAuth, isStaff } = require('../middlewares/auth.middleware.js');
const router = Router();

router.post('/', [isAuth, isStaff], reservationController.createCode);
router.get('/my-reservations', [isAuth, isStaff], reservationController.myReservations);
router.get('/:id', [isAuth, isStaff], reservationController.getReservation);
router.get('/:code/get-rooms', reservationController.getRoomsByReservation);
router.put('/set-room/:roomId', reservationController.setRoom);

module.exports = router;
