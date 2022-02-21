const destinationService = require('./destination.service.js');
const { ReservationModel } = require('../models/reservation.model.js');
const mongoose = require('mongoose');
const schoolService = require('./school.service.js');
const { SchoolModel } = require('../models/school.model.js');
class ReservationService {

    async create(user, destiny) {
        const { school } = destiny;
        const destinySlug = await destinationService.findBySlug(destiny.destiny)
        const reservation = await ReservationModel.create({
            destiny: destinySlug._id,
            staff: user._id,
        });

        await schoolService.create(school, reservation._id);

        return { code: reservation.code }
    };

    async findByStaff(staff) {
        const aggregate = [
            {
                '$match': {
                    'staff': mongoose.Types.ObjectId(staff._id)
                }
            }, {
                '$lookup': {
                    'from': 'schools',
                    'localField': '_id',
                    'foreignField': 'reservation',
                    'as': 'school'
                }
            }, {
                '$unwind': {
                    'path': '$school',
                    'preserveNullAndEmptyArrays': false
                }
            }, {
                '$project': {
                    'school.rooms': 0
                }
            }
        ]
        const reservations = await ReservationModel.aggregate(aggregate).exec();
        return reservations;
    }

    async findByCode(id) {
        const reservation = await ReservationModel.findOne({
            "code": id
        });

        return reservation;
    }

    async setUsersRoom(roomId, fullName, instagram) {
        try {
            const room = await SchoolModel.findOne({
                "rooms._id": roomId,
            });
            const tmpRoom = room.rooms.find(r => r._id == roomId);
            // TODO: parametrize max room size globally
            if (tmpRoom.passengers.length >= 4) {
                throw new Error('Room is full');
            }
            await SchoolModel.updateOne({
                "rooms._id": roomId
            }, {
                $push: {
                    "rooms.$.passengers": {
                        'fullName': fullName,
                        "instagram": instagram
                    }
                }
            });

            await SchoolModel.findByIdAndUpdate(room._id, {
                $inc: {
                    "passengersLeft": -1
                }
            });
        } catch (error) {
            throw new Error(error.message);
        }
    }


    async getRoomsByReservation(code) {
        const aggregate = [
            {
                '$match': {
                    'code': code
                }
            }, {
                '$lookup': {
                    'from': 'schools',
                    'localField': '_id',
                    'foreignField': 'reservation',
                    'as': 'school'
                }
            }, {
                '$unwind': {
                    'path': '$school',
                    'preserveNullAndEmptyArrays': false
                }
            }
        ];
        const reservations = await ReservationModel.aggregate(aggregate).exec();
        return reservations;
    }
}

module.exports = new ReservationService();
