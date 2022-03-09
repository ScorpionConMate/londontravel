const { DestinationModel } = require('../models/destination.model.js');

/**
 * @typedef {import('adminjs').ResourceWithOptions} ResourceOptions
 */

/**
 * @type {ResourceOptions}
 */
const DestinationResource = {
    resource: DestinationModel,
    options: {
        properties: {
            slug: {
                type: 'text',
                isDisabled: true,
            },
        },
    },
};

module.exports = { DestinationResource };
