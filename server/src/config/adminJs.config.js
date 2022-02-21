import AdminJS from 'adminjs';

import userRepository from '../repositories/user.repository.js';
import { AdminJsResources } from '../resources/index.js';
/**
 * @typedef {import('adminjs').AdminJSOptions} AdminJSOptions
 * @typedef {import('@adminjs/express').AuthenticationOptions} AuthenticationOptions
 * @type {AdminJSOptions}
 */
export const AdminJsConfig = {
    resources: AdminJsResources,
    rootPath: '/admin',
    version: {
        admin: true
    },
    branding: {
        companyName: 'London Travel',
        favicon: 'http://londontravel.com.ar/images/favicon.png',
        logo: 'http://www.londontravel.com.ar/images/LondonBlackldpi-p-500.png',
        softwareBrothers: false,
    },
};

/**
 * @type {AuthenticationOptions}
 */
export const AuthenticationOptions = {
    authenticate: async (username, password) => {
        console.log({ username, password });
        const user = await userRepository.findForLogin(username);
        if (user) {
            const matched = await userRepository.validatePassword(user, password);
            if (matched) {
                return user;
            }
        }
        return false;
    },
    cookiePassword: 'adminjs-auth-password'
}
