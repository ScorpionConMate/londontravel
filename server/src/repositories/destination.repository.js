import destinationModel from '../models/destination.model.js';

class DestinationRepository {
    async findBySlug(slug) {
        const destination = await destinationModel.findOne({ slug });
        if (!destination) {
            throw new Error('Destination not found');
        }

        if (!destination.enabled) {
            throw new Error('Destination not found or disabled');
        }
        return destination;
    }
}

export default new DestinationRepository();