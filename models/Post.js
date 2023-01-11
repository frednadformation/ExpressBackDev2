const mongoose = require('mongoose');

const postSchema = mongoose.Schema({
    titre: {
        type: String,
        required: true
    },
    auteur: {
        type: String,
        required: true
    },
    description : {
        type: String
    }
})

module.exports = mongoose.model('Post', postSchema);