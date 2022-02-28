const { DestinationModel } = require('../models/destination.model.js');
const destinationService = require('../services/destination.service.js');
class DestinationController {
    /**
     * 
     * @param {import('express').Request} req
     * @param {import('express').Response} res
     */
    async save(req, res) {
        try {
            const { name, colorName, backgroundColor } = req.body;
            const destination = await destinationService.save({ name, colorName, backgroundColor });
            return res.json(destination);
        } catch (error) {
            res.status(400).json({ error: error.message });
        }
    }

    async getAll(req, res) {
        try {
            const destinations = await DestinationModel.find();
            return res.json(destinations);
        } catch (error) {
            res.status(400).json({ error: error.message });
        }
    }
}

module.exports = new DestinationController()
