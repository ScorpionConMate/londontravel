import userRepository from '../repositories/user.repository.js';
import { Roles } from '../utils/roles.util.js';
import passport from 'passport';
export const isAuth = passport.authenticate('jwt', { session: false });

export const isAdmin = async (req, res, next) => {
    const { user } = req;

    const findedUser = await userRepository.findOne(user._id);

    if (findedUser.role === Roles.ADMIN) {
        return next();
    }
    return res.status(403).json({ message: 'Access denied' });
}

export const isStaff = async (req, res, next) => {
    const { user } = req;

    const findedUser = await userRepository.findOne(user._id);

    if (findedUser.role === Roles.STAFF || findedUser.role === Roles.ADMIN) {
        return next();
    }
    return res.status(403).json({ message: 'Access denied' });
}
