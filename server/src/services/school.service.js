import schoolModel from '../models/school.model.js';
import { roundMultiple } from '../utils/random.util.js';
import reservationService from './reservation.service.js';

class SchoolService {

    async findSchoolsByReservations(staff) {
        const reservations = await reservationService.findByStaff(staff);
        return schoolModel.find({ reservation: { $in: reservations } });
    }

    async create(school, reservation) {
        const { passengersQuantity } = school;
        const createdSchool = await schoolModel.create(
            {
                ...school,
                reservation,
                rooms: this.setRooms(passengersQuantity),
            });

        return createdSchool;
    }

    setRooms(passengersQuantity) {
        return Array.from(Array(roundMultiple(passengersQuantity) / 4), (v, k) => {
            return {
                passengers: [],
                name: `Habitacion ${k + 1}`,
                roomNumber: k + 1,
            }
        });
    }

    async setUserRoom({ fullName, instagram }, room) {
        const { passengers } = room;
        const newPassenger = {
            fullName,
            instagram,
        };
        const newPassengers = passengers.concat(newPassenger);
        const newRoom = {
            ...room,
            passengers: newPassengers,
        };
        return newRoom;
    }
}

export default new SchoolService();
