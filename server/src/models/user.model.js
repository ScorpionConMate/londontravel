import mongoose from 'mongoose';
import {Roles} from '../utils/roles.util.js';
import { compareSync, hash } from 'bcrypt';
const { Schema } = mongoose;

const userSchema = new Schema({
    username: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
        select: false,
    },
    firstName: {
        type: String,
        required: true,
    },
    lastName: {
        type: String,
        required: true
    },
    role: {
        type: String,
        required: true,
        default: Roles.STAFF,
    }
});

userSchema.pre(
    "save",
    async function(next) {
        const user = this;
        const hashed = await hash(user.password, 10);
        this.password = hashed;
        
        next();
    }
)

userSchema.methods.isValidPassword = function(password) {
    const user = this;
    const compare = compareSync(password, user.password);
    return compare;
}

userSchema.methods.isAdmin = function() {
    return this.role === Roles.ADMIN;
}

const UserModel = mongoose.model('User', userSchema);
export default UserModel;
