const userRepository = require('../repositories/user.repository.js');
const { AdminJsResources } = require('../resources/index.js');
const AdminJS = require('adminjs');
const { Roles } = require('../utils/roles.util.js');
/**
 * @typedef {import('adminjs').AdminJSOptions} AdminJSOptions
 * @typedef {import('@adminjs/express').AuthenticationOptions} AuthenticationOptions
 * @type {AdminJSOptions}
 */
const AdminJsConfig = {
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
    dashboard: {
        handler: async () => {
            return { some: 'output' }
        },
        component: AdminJS.bundle('../../components/Dashboard/index'),
    },
};

/**
 * @type {AuthenticationOptions}
 */
const AuthenticationOptions = {
    authenticate: async (username, password) => {

        const user = await userRepository.findByEmail(username);
        if (user) {
            const matched = await user.isValidPassword(password);
            if (matched) {
                return user.role === Roles.ADMIN;
            }
        }
        return false;
    },
    cookiePassword: 'adminjs-auth-password'
}

module.exports = {
    AdminJsConfig,
    AuthenticationOptions
}
