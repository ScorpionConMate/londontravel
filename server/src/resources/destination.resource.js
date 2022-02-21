import { DestinationModel } from '../models/destination.model.js';

/**
 * @typedef {import('adminjs').ResourceWithOptions} ResourceOptions
 */

/**
 * @type {ResourceOptions}
 */
export const DestinationResource = {
    resource: DestinationModel,
    options: {
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
}
