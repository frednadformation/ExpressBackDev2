const mongoose = require('mongoose');

const contactSchema = mongoose.Schema({
    nom : { type: String, required: true},
    prenom : { type: String},
    email : { type: String, required: true},
    age : { type: Number}
});

module.exports = mongoose.model('UserContact', contactSchema);