// @ts-check
import { UserModel } from '../models/user.model.js';
import { Roles } from '../utils/roles.util.js';
import { compareSync, hash } from 'bcrypt';

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
