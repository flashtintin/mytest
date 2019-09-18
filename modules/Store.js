/**
 * Created by kid on 2017/5/17.
 */
const { Store } = require('koa-session2');
const redis = require('./Redis');
const config = require('../config');

function getSession(sid) {
  return new Promise((resolve, reject) => {
    redis.get(`SESSION:${sid}`, (e, r) => {
      if (e) {
        reject(e);
      } else {
        resolve(r);
      }
    });
  });
}

function setTTL(sid) {
  return new Promise((resolve, reject) => {
    redis.expireat(`SESSION:${sid}`, parseInt(Date.now() / 1000, 10) + config.redis.ttl, (e, r) => {
      if (e) {
        reject(e);
      } else {
        resolve(r);
      }
    });
  });
}

class RedisStore extends Store {
  constructor(value) {
    super(value);
    this.value = value;
  }

  async get(sid) {
    console.log(this.id);
    if (redis.status !== 'ready') return {};

    try {
      const session = await getSession(sid);
      const ttl = await setTTL(sid);

      if (ttl) {
        return JSON.parse(session);
      }

      return {};
    } catch (e) {
      console.log(e);
      return { error: 'redis错误' };
    }
  }

  async set(session, opts) {
    if (!opts.sid) {
      opts.sid = this.getID(24);
    }
    await redis.set(`SESSION:${opts.sid}`, JSON.stringify(session), 'EX', config.redis.ttl);
    return opts.sid;
  }

  async destroy(sid) {
    console.log(this.sid);
    const res = await redis.del(`SESSION:${sid}`);
    return res;
  }
}

module.exports = RedisStore;
