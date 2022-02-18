import mongoose from 'mongoose';
import slugify from 'slugify';
const { Schema } = mongoose;

const destinationSchema = new Schema({
    name: {
        type: String,
        required: true,
        unique: true,
    },
    slug: {
        type: String,
        unique: true,
    },
    colorName: {
        type: String,
        required: true,
    },
    backgroundColor: {
        type: String,
        required: true,
    },
    enabled: {
        type: Boolean,
        default: false,
    }
});

destinationSchema.pre(
    "save",
    async function(next) {
        const destination = this;
        const slug = slugify(destination.name, {lower: true, replacement: ''});
        this.slug = slug;
        next();
    }
)

export default mongoose.model('Destination', destinationSchema);
