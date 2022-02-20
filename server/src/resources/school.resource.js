import { SchoolModel } from '../models/school.model.js';

/**
 * @typedef {import('adminjs').ResourceWithOptions} ResourceOptions
 * 
 */

/**
 * @type {ResourceOptions}
 * 
 */
export const SchoolResource = {
    resource: SchoolModel,
    options: {}
};
