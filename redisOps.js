



// let redis = require("redis");


// let config = require("./config");


// let redisClient = redis.createClient(config.REDIS_HOST, config.REDIS_PORT);




// redisClient.on('connect', function () {
//     console.log('Redis client connected :', config.REDIS_HOST, " : ", config.REDIS_PORT);
// });

// redisClient.on('error', function (err) {
//     console.log('Something went wrong ' + err);
// });



// let getKeys = (key) => {
//     return redisClient.get(key, (error, data) => {
//         if (error) {
//             console.log("Error in getting all keys : ", error);
//         }

//         return data;
//     })
// }



// let flushAllKeys = () => {
//     redisClient.flushall((error, data) => {
//         if (error) {
//             console.log("Error in flushing all keys : ", error);
//         }

//         console.log("Flushed all : ", data);

//     })
// }