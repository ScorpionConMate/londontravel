const userRepository = require('../repositories/user.repository.js');
const { Roles } = require('../utils/roles.util.js');
const passport = require('passport');

const isAuth = passport.authenticate('jwt', { session: false });

const isAdmin = async (req, res, next) => {
    const { user } = req;
    const findedUser = await userRepository.findOne(user._id);

    if (findedUser.role === Roles.ADMIN) {
        return next();
    }
    return res.status(403).json({ message: 'Access denied' });
}

const isStaff = async (req, res, next) => {
    const { user } = req;

    const findedUser = await userRepository.findOne(user._id);

    if (findedUser.role === Roles.STAFF || findedUser.role === Roles.ADMIN) {
        return next();
    }
    return res.status(403).json({ message: 'Access denied' });
}

module.exports = {
    isAuth,
    isAdmin,
    isStaff
}
