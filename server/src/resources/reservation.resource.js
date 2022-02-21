import { ReservationModel } from '../models/reservation.model.js';
/**
 * @typedef {import('adminjs').ResourceWithOptions} ResourceOptions
 */


/**
 * @type {ResourceOptions}
 */
export const ReservationResource = {
    resource: ReservationModel,
    options: {
        properties: {
            code: {
                type: 'text',
                isDisabled: true,
            }
        }
    }
};
