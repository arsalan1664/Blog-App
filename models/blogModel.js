const mongoose = require('mongoose')

const blogSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [
            true,
            'Please provide title of blog'
        ]
    },
    descryption: {
        type: String,
        require: [
            true,
            'Please provide descryption of blog'
        ]
    },
    image: {
        type: String,
        required: [
            true,
            'Please provide image of blog'
        ]
    }
}, {
    timestamps: true
})

const blogModel = new mongoose.model('Blog-Model', blogSchema)
module.exports = blogModel
