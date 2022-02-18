import destinationService from './destination.service.js';
import reservationModel from '../models/reservation.model.js';
import schoolModel from '../models/school.model.js';
import schoolService from './school.service.js';
class ReservationService {

    async create(user, destiny) {
        const { school } = destiny;
        const destinySlug = await destinationService.findBySlug(destiny.destiny)
        const reservation = await reservationModel.create({
            destiny: destinySlug._id,
            staff: user._id,
        });

        const schoolCreate = await schoolService.create(school, reservation._id);

        return { reservation, school: schoolCreate };
    }

    async findByStaff(staff) {
        const reservations = await reservationModel.find({ staff: staff._id });
        return reservations;
    }

    async findById(id) {
        const reservation = await reservationModel.findById(id);
        return reservation;
    }
}

export default new ReservationService();
