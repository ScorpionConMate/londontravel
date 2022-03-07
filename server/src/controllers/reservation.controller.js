const reservationService = require('../services/reservation.service.js');
const schoolService = require('../services/school.service.js');

class ReservationController {
    /**
     * @param {import('express').Request} req
     * @param {import('express').Response} res
     */
    async createCode(req, res) {
        try {
            const { user: staff } = req;
            const { destiny, school } = req.body;
            const reservation = await reservationService.create(staff, { destiny, school });
            return res.status(200).json(reservation);
        } catch (e) {
            return res.status(400).json({ error: e.message });
        }
    }

    /**
     * @param {import('express').Request} req
     * @param {import('express').Response} res
     */
    async myReservations(req, res) {
        try {
            const { user: staff } = req;
            console.log(staff);
            const schools = await schoolService.findSchoolsByReservations(staff);

            return res.status(200).json({ schools });
        } catch (e) {
            console.log(e);
            return res.status(400).json({ error: e.message });
        }
    }

    /**
     * @param {import('express').Request} req
     * @param {import('express').Response} res
     */
    async getReservation(req, res) {
        try {
            const { id: code } = req.params;
            const reservation = await reservationService.findByCode(code);

            return res.status(200).json(reservation);
        } catch (e) {
            return res.status(400).json({ error: e.message });
        }
    }

    async setRoom(req, res) {
        const {
            fullName,
            instagram
        } = req.body;

        const { roomId } = req.params;

        try {
            await reservationService.setUsersRoom(roomId, fullName, instagram);
            return res.sendStatus(204);
        } catch (e) {
            return res.status(400).json({ error: e.message });
        }
    }

    async getRoomsByReservation(req, res) {
        const { code } = req.params;

        try {
            const rooms = await reservationService.getRoomsByReservation(code);
            return res.status(200).json(rooms);
        } catch (e) {
            return res.status(400).json({ error: e.message });
        }
    }
}

module.exports = new ReservationController();
