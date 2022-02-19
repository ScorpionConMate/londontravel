import mongoose from 'mongoose';
import { getCurrentYearAndPlus } from '../utils/date.util.js';
import { generateRandomNumber, roundMultiple } from '../utils/random.util.js';
const { Schema } = mongoose;

const reservationSchema = new Schema({
    code: {
        type: String,
        unique: true,
    },
    destiny: {
        type: Schema.Types.ObjectId,
        ref: 'Destination',
    },
    staff: {
        type: Schema.Types.ObjectId,
        ref: 'User',
    },
});


reservationSchema.pre(
    "save",
    async function (next) {
        const reservation = this;
        reservation.code = generateRandomNumber(7);
        this.passengersLeft = reservation.passengersQuantity;
        next();
    });

export default mongoose.model('Reservation', reservationSchema);
