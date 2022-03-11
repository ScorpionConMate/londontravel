const { Router } = require('express');
const passport = require('passport');
const jwt = require('jsonwebtoken');

const router = Router();

router.post('/login', async (req, res, next) => {
    passport.authenticate('login', async (err, user, info) => {
        try {

            if (err | !user) {
                console.log(err);
                const error = new Error('An Error Occurred');
                return res.status(500).json({ error: error.message });
            }

            req.login(user, { session: false }, async (error) => {
                if (error) return next(error);

                const payload = {
                    user: {
                        _id: user._id,
                        username: user.username,
                        firstName: user.firstName,
                        lastName: user.lastName,
                        role: user.role,
                    }
                }
                const token = jwt.sign(payload, process.env.JWT_TOKEN);
                return res.json({ token, user: payload.user });
            });

        } catch (error) {
            return next(error);
        }
    })(req, res, next);
})

module.exports = router;
