var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var dogDescription = new Schema({

    dogBreed:{
        type: String,
        required: false
    },

    description:{
        type: String,
        required: false
    }
});

module.exports = mongoose.model('dogDescription', dogDescription);