const { SchoolModel } = require('../models/school.model.js');
const { roundMultiple } = require('../utils/random.util.js');



class SchoolService {

    async findSchoolsByReservations(staff) {
        const ReservationService = require('./reservation.service');
        const reservations = await ReservationService.findByStaff(staff);
        return reservations;
    }

    async create(school, reservation) {
        const { passengersQuantity } = school;
        const createdSchool = await SchoolModel.create(
            {
                ...school,
                reservation,
                rooms: this.setRoomsEmptyArray(passengersQuantity),
            });

        return createdSchool;
    }

    setRoomsEmptyArray(passengersQuantity) {
        return Array.from(Array(roundMultiple(passengersQuantity) / 4), (v, k) => {
            return {
                passengers: [],
                name: `Habitacion ${k + 1}`,
                roomNumber: k + 1,
            }
        });
    }
}

module.exports = new SchoolService();
