import mongoose from 'mongoose';
import { getCurrentYearAndPlus } from '../utils/date.util.js';
import { roundMultiple } from '../utils/random.util.js';
const { Schema } = mongoose;

const schoolSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    turn: {
        type: String,
        enum: [
            'morning',
            'afternoon',
            'night',
        ],
        required: true,
    },
    division: {
        type: String,
        required: true,
    },
    location: {
        type: String,
        required: true,
    },
    travelYear: {
        type: Number,
        enum: getCurrentYearAndPlus(),
        required: true,
    },
    passengersQuantity: {
        type: Number,
        required: true,
    },
    reservation: {
        type: Schema.Types.ObjectId,
        ref: 'Reservation',
    },
    rooms: [{
        passengers: [{
            fullName: {
                type: String,
            },
            instagram: {
                type: String,
            },
        }],
        name: {
            type: String,
        },
        roomNumber: {
            type: Number,
        },
    }],
});

schoolSchema.pre('save', async function (next) {
    const school = this;
    school.passengersQuantity = roundMultiple(school.passengersQuantity);
    next();
})

const SchoolModel = mongoose.model('School', schoolSchema);
export default SchoolModel;