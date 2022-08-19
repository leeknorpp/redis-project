//const Redis = require('ioredis');
import 'regenerator-runtime/runtime';

//Take advantage of async functions so we can use await and promises
export const redisServer = async() => {
    
    //Connect to Redis at 127.0.0.1, port 6379
    const client = new Redis({
        host: '127.0.0.1',
        port: 6379,
    });

    // Set key "sample_key" to have the value "test value"
    await client.set('sample_key', 'test_value');

    // Get the value of our sample key and log it
    const value = await client.get('sample_key');
    console.log(value);

    //disconnect from redis
    client.quit();
}