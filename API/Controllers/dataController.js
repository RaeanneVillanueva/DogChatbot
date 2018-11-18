'use strict';

var mongoose = require('mongoose');
var dogDescription = mongoose.model('dogDescription');

exports.processRequest = function(req, res){
    if(req.body.result.action == "dogBreed"){
        getDogDescription(req, res)
    }
};

function getDogDescription(req,res)
{
    let breedSearched = req.body.result &&
     req.body.result.parameters && 
     req.body.result.parameters.dogBreed ? 
     req.body.result.parameters.dogBreed : 'Unknown';

    var dogExists = dogDescription.findOne({dogBreed:breedSearched});

    if(dogExists){
        return res.json({
            speech : dogExists.description,
            displayText : dogExists.description,
            source : 'dogDescription'
        });
    }else{
        return res.json({
            speech : 'Sorry, I do not have information about this breed yet!',
            displayText: 'Sorry, I do not have information about this breed yet!',
            source : 'dogDescription'
        });
    }
