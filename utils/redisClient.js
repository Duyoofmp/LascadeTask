const Redis = require('ioredis');
const dotenv = require('dotenv');

dotenv.config();

const client = new Redis(process.env.REDIS_URL);

client.on('connect', () => {
    console.log('Redis client connected');
});

client.on('error', (err) => {
    console.log('Redis client error:', err);
});

module.exports = client;
