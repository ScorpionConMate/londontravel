const { DestinationModel } = require('../models/destination.model.js');

class DestinationRepository {
    async findBySlug(slug) {
        const destination = await DestinationModel.findOne({ slug });
        if (!destination) {
            throw new Error('Destination not found');
        }

        if (!destination.enabled) {
            throw new Error('Destination not found or disabled');
        }
        return destination;
    }
}

module.exports = new DestinationRepository();
