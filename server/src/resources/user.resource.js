// @ts-check
import { UserModel } from '../models/user.model.js';
import { Roles } from '../utils/roles.util.js';

/**
 * @typedef {import('adminjs').ResourceWithOptions} ResourceOptions
 */

/**
 * @type {ResourceOptions}
 */
export const UserResource = {
    resource: UserModel,
    options: {
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
        }
    }
}
