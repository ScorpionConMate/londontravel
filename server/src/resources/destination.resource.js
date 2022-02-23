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
        navigation: {
            name: 'Admin',
            icon: 'users',
        },
        properties: {
            slug: {
                type: 'text',
                isDisabled: true,
            },
            colorName: {
                type: 'text',
                props: {
                    type: 'color'
                },
            },
            backgroundColor: {
                type: 'text',
                props: {
                    type: 'color',
                },
                isVisible: {
                    list: false,
                    filter: false
                }
            }
        },
    }
};

module.exports = { DestinationResource };
