import destinationService from '../services/destination.service.js'
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
}

export default new DestinationController()
