const { DestinationModel } = require('../models/destination.model.js');
const destinationRepository = require('../repositories/destination.repository.js');
class DestinationService {
    async save(destination) {
        const { name, colorName, backgroundColor } = destination;
        return await DestinationModel.create({ name, colorName, backgroundColor });
    }

    async findBySlug(slug) {
        try {
            return await destinationRepository.findBySlug(slug);
        } catch (error) {
            throw new Error('Destination not found or disabled');
        }
    }
}

module.exports = new DestinationService()
