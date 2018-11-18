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
    
    dogDescription.findOne({dogBreed: breedSearched},function(err, breedExists)
        {
            if (err)
            {
            return res.json({
                speech: 'Something went wrong!',
                displayText: 'Something went wrong!',
                source: 'dogDescription'
            });
            }
            if (breedExists)
            {
            return res.json({
                    speech: breedExists.description,
                    displayText: breedExists.description,
                    source: 'dogDescription'
                });
            }
            else {
            return res.json({
                    speech: 'Currently I am not having information about this breed',
                    displayText: 'Currently I am not having information about this breed',
                    source: 'dogDescription'
                });
            }
        });
}
