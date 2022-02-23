// @ts-check
const { UserModel } = require('../models/user.model.js');
const { Roles } = require('../utils/roles.util.js');
const { hash } = require('bcrypt');

/**
 * @typedef {import('adminjs').ResourceWithOptions} ResourceOptions
 */

/**
 * @type {ResourceOptions}
 */
const UserResource = {
    resource: UserModel,
    options: {
        navigation: {
            name: 'Admin',
            icon: 'users',
        },
        listProperties: ['_id', 'firstName', 'lastName', 'username', 'role'],
        properties: {
            password: {
                type: 'password',
            },
            role: {
                availableValues: Object.keys(Roles).map(key => ({
                    label: key,
                    value: Roles[key]
                })),
            }
        },
        actions: {
            edit: {
                before: async (req) => {
                    if (req.payload.password) {
                        const hashed = await hash(req.payload.password, 10);
                        req.payload.password = hashed;
                    }
                    return req;
                }
            }
        }

    },
}

module.exports = { UserResource };
