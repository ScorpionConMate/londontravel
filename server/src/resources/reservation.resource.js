const { ReservationModel } = require('../models/reservation.model.js');
/**
 * @typedef {import('adminjs').ResourceWithOptions} ResourceOptions
 */


/**
 * @type {ResourceOptions}
 */
const ReservationResource = {
    resource: ReservationModel,
    options: {
        navigation: {
            name: 'Admin',
            icon: 'users',
        },
        properties: {
            code: {
                type: 'text',
                isDisabled: true,
            }
        }
    }
};

module.exports = { ReservationResource };
