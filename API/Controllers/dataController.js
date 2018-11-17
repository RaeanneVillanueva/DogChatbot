'use strict';

var mongoose = require('mongoose');
var dogDescription = mongoose.model('dogDescription');

exports.processRequest = function(req, res){
    if(req.body.result.action == "tell.about"){
        getDogDescription(req, res)
    }
};

function getDogDescription(req,res)
{
    let breedSearched = req.body.result &&
     req.body.result.parameters && 
     req.body.result.parameters.team ? 
     req.body.result.parameters.team : 'Unknown';
    
    dogDescription.findOne({name: breedSearched},function(err, breedExists)
        {
            if (err)
            {
            return res.json({
                speech: 'Something went wrong!',
                displayText: 'Something went wrong!',
                source: 'team info'
            });
            }
            if (breedExists)
            {
            return res.json({
                    speech: teamExists.description,
                    displayText: teamExists.description,
                    source: 'team info'
                });
            }
            else {
            return res.json({
                    speech: 'Currently I am not having information about this breed',
                    displayText: 'Currently I am not having information about this team',
                    source: 'dogDescription'
                });
            }
        });
}