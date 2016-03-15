var express = require("express");
var router = express.Router();
//var mongodb = require("mongodb");
//var db = mongodb.MongoClient.connect("mongodb://localhost/test1");



var C1 = require('../models/c1');


router.get('/c1', function(req, res, next) {
    C1.find().
    then(res.json.bind(res)).catch(function(){
        console.log(err);
        next(err);
    
    });        
});

router.post('/c1', function(req, res, next) {
    //var c1 = req.body;
    var c1 = new C1(req.body);
    c1.save().
    then(res.json.bind(res)).catch(function(){
        console.log(err);
        next(err);
    });
});

router.put('/c1/:id',function(req,res,next){
    console.log(req.body);
    C1.update({_id:req.body._id},{$set:{
        firstName:req.body.firstName,
        lastName:req.body.lastName,
        email:req.body.email
    }},function(err){
        if(err)console.log("update failed");
    });
    console.log(req.body);
});


router.delete('/c1/:id',function(req,res,next){
    console.log(C1.remove);
    C1.findById(req.params.id)
        .then(function(c1) {
            return c1.remove();
        })
        .then(res.json.bind(res))
        .catch(function(err) {
            console.log(err);
            res.status(500).json({
                status: false,
                msg: err
            });
        })
});



module.exports = router;
