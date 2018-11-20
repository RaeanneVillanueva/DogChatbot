'use strict';

var mongoose = require('mongoose');
var dogDescription = mongoose.model('dogDescription');

exports.processRequest = function (req, res) {
    if (req.body.action == "dogBreed") {
        getDogDescription(req, res)
    }
};

function getDogDescription(req, res) {
    let breedSearched = req.body &&
        req.body.parameters &&
        req.body.parameters.breedSearched ?
        req.body.parameters.breedSearched : 'Unknown';

    dogDescription.findOne({
        dogBreed: {
            $regex: new RegExp(breedSearched, "i")
        }
    }, function (err, breedExists) {
        if (err) {
            return res.json({
                speech: 'Something went wrong!',
                displayText: 'Something went wrong!',
                source: 'dogDescription'
            });
        }

        if (breedExists) {
            return res.json({
                speech: breedExists.description,
                displayText: breedExists.description,
                source: 'dogDescription'
            });
        } else {
            return res.json({
               speech: 'I currently have no information about this breed',
               displayText: 'I currently have information about this breed',
               source: 'dogDescription'
            });
        }
    });
}
