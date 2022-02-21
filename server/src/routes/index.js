const { Router } = require('express');
const users = require('./user.route.js');
const auth = require('./auth.route.js');
const destinations = require('./destination.route.js');
const reservations = require('./reservation.route.js');
const { isAdmin, isAuth } = require('../middlewares/auth.middleware.js');

const router = Router();

router.use('/users', users);
router.use('/auth', auth);
router.use('/destinations', destinations);
router.use('/reservations', reservations);

router.get('/test', [isAuth, isAdmin], (req, res) => {
    res.send('test');
});

module.exports = router;
