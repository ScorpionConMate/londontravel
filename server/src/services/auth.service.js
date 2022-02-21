// @ts-check
const passport = require('passport');
const { Strategy } = require('passport-local');
const userRepository = require('../repositories/user.repository.js');
const JwtStrategy = require('passport-jwt');
const { ExtractJwt } = require('passport-jwt');
const { config } = require('dotenv');
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

