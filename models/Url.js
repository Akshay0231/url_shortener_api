const mongoose = require('mongoose');

const urlSchema = new mongoose.Schema({
    inputUrl: {
        type: String,
        required: true
    },
    shortUrlCode: {
        type: String,
        required: true,
        max: 7
    },
    clicks: {
        type: Number,
        default: 0,
    }
}, { timestamps: true })

module.exports = mongoose.model('Url', urlSchema)