const { SchoolModel } = require('../models/school.model.js');

/**
 * @typedef {import('adminjs').ResourceWithOptions} ResourceOptions
 * 
 */

/**
 * @type {ResourceOptions}
 * 
 */
const SchoolResource = {
    resource: SchoolModel,
    options: {
        navigation: {
            name: 'Admin',
            icon: 'users',
        },
    }
};
module.exports = { SchoolResource };
