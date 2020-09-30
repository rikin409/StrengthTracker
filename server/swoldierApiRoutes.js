const express = require('express');
const router = express.Router();

//item model
const Swoldier = require('./Swoldier');

router.get('/', function(req, res){
    
    Swoldier.find()
        .then(xxx => res.json(xxx)); 
});

router.put('/ID', function(req, res){
    var ID = req.body._id;
    Swoldier.find({_id: ID})
        .then(xxx => res.json(xxx)); 
});

router.post('/', function(req, res){
    var tempSwoldier = new Swoldier({
        name: req.body.name,
        maxBench: req.body.maxBench,
        maxSquat: req.body.maxSquat,
        maxDeadlift: req.body.maxDeadlift
    }); 
    
    tempSwoldier.save(function(err, savedLifter){
        if(err){res.status(500).send({error:"Could not save Swoldier"});}
        else{res.send(savedLifter);}
    })
});

router.delete('/', function(req, res){
    
    Swoldier.findById(req.body._id)
        .then(xxx => xxx.remove().then(function(){res.json("Deleted")}))
        .catch(err=> res.status(404).send('Did not find ID to delete'))    
    
    //Same as:
    
//    Swoldier.findById(req.params.id, function(err,xxx){
//        if(err){
//            res.send("NOOOOO");
//        }
//        else{
//            xxx.remove(function(err,yyy){
//                if(err){
//                res.send("NOOO2")}
//                else{
//                    res.send(yyy);
//                }
//            });
//        }
//    })
    
    
});


router.put('/', function(request, response){
        var ID = request.body._id;
        var tempSwoldierNotModeled = request.body;
        Swoldier.updateMany({_id: ID}, {$set: tempSwoldierNotModeled}, function(err,xxx){
            if(err){response.status(500).send({error:"Could not save person"});}
            else{response.send(xxx);}
        });
    
    
});

module.exports = router;