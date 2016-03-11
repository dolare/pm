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

router.delete('/c1/:id',function(req,res,next){
    C1.findById(req.params.id).then(function(c1){
        c1.remove();
        res.json({status:true});
    }).catch(function(err){
        console.log(err);
        res.json({status:false,msg:err});
        res.status(500).json({
            status:false,
            msg:err
    });
    })
});



module.exports = router;
