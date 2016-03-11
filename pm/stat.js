var Redis = require('ioredis');
var redis = Redis();

module.exports = function(req,res,next){
    redis.incr("stat_#" + req.method +"#" + req.baseUrl + req.path);

    next();
}
