import schoolModel from '../models/school.model.js';
import { roundMultiple } from '../utils/random.util.js';
import reservationService from './reservation.service.js';

class SchoolService {

    async findSchoolsByReservations(staff) {
        const reservations = await reservationService.findByStaff(staff);
        return reservations;
    }

    async create(school, reservation) {
        const { passengersQuantity } = school;
        const createdSchool = await schoolModel.create(
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

export default new SchoolService();
