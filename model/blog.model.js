const mongoose = require('mongoose');
const validator = require('validator');
const Schema = mongoose.Schema;

const blogSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true
    },
    created: {
        type: Date,
        default: Date.now()
    },
    info: {
        type: String,
        required: true
    }
})
module.exports = mongoose.model('Blog', blogSchema)