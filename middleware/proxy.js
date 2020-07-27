/**
 * Created by kid on 2017/5/17.
 */
const request = require('request');
const uuidV1 = require('uuid/v1');
const config = require('../config');

const defaultOptions = {
  target: '',
};
const getData = opts =>
  new Promise((resolve, reject) => {
    request(opts, (e, r, body) => {
      if (!e && body) {
        resolve(body);
      } else {
        reject(e);
      }
    });
  });

module.exports = (context, options = defaultOptions) => async (ctx, next) => {
  const re = new RegExp(`^\\${context}(\\/|\\/\\w+)?`);
  const pass = re.test(ctx.req.url);

  if (!pass) return next();
  const url = ctx.req.url.replace(context, options.target);
  const opts = {
    // rejectUnauthorized: false,
    method: ctx.req.method,
    // url: config.api.url + ctx.req.url.replace(/:/g, ''),
    url,
    json: true,
    headers: {
      'Content-Type': 'application/json; charset=utf-8',
    },
  };

  if (ctx.req.method === 'POST') {
    const dataBody = ctx.request.body;
    dataBody.gid = uuidV1();

    opts.body = dataBody;
  }

  ctx.body = await getData(opts);

  return next();
};
