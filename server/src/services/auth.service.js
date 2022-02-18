// @ts-check
import passport from 'passport';
import { Strategy } from 'passport-local';
import userRepository from '../repositories/user.repository.js';
import JwtStrategy from 'passport-jwt';
import { ExtractJwt } from 'passport-jwt';
import { config } from 'dotenv';
config();
const JWTStrategy = JwtStrategy.Strategy;

const LocalStrategy = Strategy;
passport.use(
    'login',
    new LocalStrategy(
        {
            usernameField: 'username',
            passwordField: 'password'
        }, async (username, password, done) => {
            try {
                const user = await userRepository.findForLogin(username);

                if (!user) {
                    return done(null, false, { message: 'User not found' });
                }
                const isValid = await userRepository.validatePassword(user, password);
                if (!isValid) {
                    return done(null, false, { message: 'Incorrect password' });
                }
                return done(null, user, { message: 'Logged in Successfully' });

            } catch (error) {
                done(error);
            }
        }
    ));
passport.use(
    new JWTStrategy(
        {
            secretOrKey: process.env.JWT_TOKEN,
            jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
        },
        async (token, done) => {
            try {
                return done(null, token.user);
            } catch (error) {
                done(error);
            }
        }
    )
);

