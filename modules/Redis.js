/**
 * Created by kid on 2017/5/17.
 */
const Redis = require('ioredis');
const config = require('../config');
const utils = require('./utils');

const redis = new Redis(config.redis);

redis.on('connect', () => {
  console.log('redis connected');
});

redis.on('error', (e) => {
  console.log(utils.formatDate(new Date()), '↓');
  console.log(e);
});

module.exports = redis;
