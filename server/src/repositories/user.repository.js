import { UserModel } from '../models/user.model.js';
import { compareSync, hash } from 'bcrypt';
class UserRepository {
    async find() {
        return UserModel.find();
    }

    async findOne(id) {
        return UserModel.findOne({ _id: id });
    }

    async create(user) {
        const created = await UserModel.create(user)
        delete created._doc.password;

        return created._doc;
    }

    async update(id, user) {
        return UserModel.updateOne({ _id: id }, user);
    }

    async delete(id) {
        return UserModel.deleteOne({ _id: id });
    }

    async findForLogin(username) {
        return await UserModel.findOne({ username: username }).select('+password');
    }

    async validatePassword(user, password) {
        const compare = compareSync(password, user.password);
        return compare;
    }
}

export default new UserRepository();
