const userService = require('../services/user.service.js');

class UserController {

    /**
     * @param {import('express').Request} req
     * @param {import('express').Response} req
     */
    async find(req, res) {
        try {
            const users = await userService.find();
            return res.json(users);
        } catch (error) {
            return res.status(400).json({
                message: error.message
            });
        }

    }

    /**
     * @param {import('express').Request} req
     * @param {import('express').Response} req
     */
    async create(req, res) {
        try {
            const {
                username, password, email, firstName, lastName
            } = req.body;
            const user = {
                username, password, email, firstName, lastName
            };
            const createdUser = await userService.create(user);
            return res.json(createdUser);
        } catch (error) {
            return res.status(400).json({
                message: error.message
            });
        }
    }

    /**
     * @param {import('express').Request} req
     * @param {import('express').Response} req
     */
    async findOne(req, res) {
        try {
            const { id } = req.params;
            const user = await userService.findOne(id);
            return res.json(user);
        } catch (error) {
            return res.status(400).json({
                message: error.message
            });
        }
    }
}

module.exports = new UserController();
