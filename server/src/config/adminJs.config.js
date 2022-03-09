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
    locale: {
        language: 'en',
        translations: {
            actions: {
                new: 'Nuevo registro', // (resource action) - create new records in a resource
                list: 'Ver registros', // (resource action) - list all records within a resource
                search: 'Buscar', // (resource action) - search by query string
                edit: 'Editar', // (record action) - update records in a resource
                show: 'Ver', // (record action) - show details of given record
                delete: 'Borrar', // (record action) - delete given record
                bulkDelete: 'Borrado Masivo', // (bulk action) - delete given records
                filter: 'Ver filtros', // (resource action) - filter records by given query string
            },
            buttons: {
                filter: 'Filtrar', // (resource action) - filter records by given query string
                reset: 'Reiniciar', // (resource action) - reset filter
                save: 'Guardar', // (record action) - save given record
                edit: 'Editar', // (record action) - edit given record
            }
        }
    },
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
                return user.role === Roles.ADMIN ? user : false;
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
