import userModel from '../models/user.model.js';
import { compareSync, hash } from 'bcrypt';
class UserRepository {
    async find(){
        return userModel.find();
    }

    async findOne(id){
        return userModel.findOne({_id: id});
    }

    async create(user){
        const created = await userModel.create(user)
        delete created._doc.password;

        return created._doc;
    }

    async update(id, user){
        return userModel.updateOne({_id: id}, user);
    }

    async delete(id){
        return userModel.deleteOne({_id: id});
    }

    async findForLogin(username){
        return await userModel.findOne({username: username}).select('+password');
    }

    async validatePassword(user, password){
        const compare = compareSync(password, user.password);
        return compare;
    }
}

export default new UserRepository();
