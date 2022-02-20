import { DestinationModel } from '../models/destination.model.js';
import destinationRepository from '../repositories/destination.repository.js';
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

export default new DestinationService()
