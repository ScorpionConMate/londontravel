const mongoose = require('mongoose');
const slugify = require('slugify');
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
    enabled: {
        type: Boolean,
        default: false,
    }
});

destinationSchema.pre(
    "save",
    async function (next) {
        const destination = this;
        const slug = slugify(destination.name, { lower: true, replacement: '' });
        this.slug = slug;
        next();
    }
)

const DestinationModel = mongoose.model('Destination', destinationSchema);

module.exports = { DestinationModel };
