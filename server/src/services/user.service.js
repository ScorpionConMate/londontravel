import userRepository from '../repositories/user.repository.js';

class UserService {
    async find() {
        return await userRepository.find();
    }

    async findOne(id) {
        return await userRepository.findOne(id);
    }

    async create(user) {
        const createdUser = await userRepository.create(user);
        return createdUser;
    }
}

export default new UserService();
