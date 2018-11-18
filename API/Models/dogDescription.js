var mongoose = require('mongoose');
var config = require('../../Config.js');
var Schema = mongoose.Schema;

mongoose.Promise = global.Promise;
mongoose.connect(config.dbUrl, {
    useNewUrlParser: true
}, (err) => {
    if (err) console.log("Error: Cannot connect to mlab")
});


var dogDescription = new Schema({

    dogBreed: {
        type: String,
        required: false
    },

    description: {
        type: String,
        required: false
    }
});

const dog = mongoose.model('dogDescription', dogDescription, "dogDescription");

module.exports = dog;