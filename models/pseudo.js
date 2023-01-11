const mongoose = require('mongoose');

const pseudo = mongoose.Schema({
    pseudo : {type : String },
    age : {type : Number}
});

module.exports = mongoose.model('Formulaire', pseudo);
