const { UserModel } = require('../models/user.model.js');
const { compareSync, hash } = require('bcrypt');
const fs = require('fs');
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

    async findByEmail(email) {
        return await UserModel.findOne({ email }).select('+password');
    }

    async createDefaultAdmin() {
        const usersFile = await fs.promises.readFile('defaultUsers.json', {
            encoding: 'utf-8'
        });
        const users = JSON.parse(usersFile.toString())

        for (const user of users) {
            if (!(await this.findByEmail(user.email))) {
                await UserModel.create(user);
                console.log(`Default user with Role: ${user.role} created`);
            } else {
                console.log(`Default user with Role: ${user.role} already exists`);
            }
        }
    }
}

module.exports = new UserRepository();
