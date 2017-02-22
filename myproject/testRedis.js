var Redis = require("ioredis");
// var redisConf = require("./configs/redis_env.json");

// var redisConf = 
// {
//     port: process.env.REDIS_PORT_6379_TCP_PORT ? process.env.REDIS_PORT_6379_TCP_PORT : 6379,
//     host: process.env.REDIS_PORT_6379_TCP_ADDR ? process.env.REDIS_PORT_6379_TCP_ADDR : "localhost",
//     password: process.env.REDIS_PASSWORD ? process.env.REDIS_PASSWORD : ""
// }
var redisConf = 
{
    port: process.env.REDIS_PORT_6379_TCP_PORT,
    host: process.env.REDIS_PORT_6379_TCP_ADDR,
    password: process.env.REDIS_PASSWORD
}

console.log(process.env);
console.log(redisConf);

var redis = new Redis(redisConf);

redis.set("name", "lobby");

redis.get("name", function(err, rs){
    console.log(rs);
});

// var client = redis.createClient(6379, '127.0.0.1', '');

// client.auth("", function(){
//     console.log('pass');
// });

// client.on("end", function(e){
//     console.log(`end with ${e}`);
// })

// client.on("connect", function(){
//     console.log(client.get("name"));
// });