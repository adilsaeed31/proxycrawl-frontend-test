require('./helpers/globals.js');
const http = require('http');
const Koa = require('koa');
const bodyParser = require('koa-bodyparser');
const conditionalGet = require('koa-conditional-get');
const etag = require('koa-etag');
const json = require('koa-json');
const cacheControl = require('koa-cache-control');
const router = rootRequire('helpers/router.js');
const enforceWWW = require('koa-www-force');

const app = new Koa();

app
  .use(bodyParser())
  .use(
    enforceWWW({
      www: false,
      useHTTPS: true,
      trustHostHeader: true,
    })
  )
  .use(cacheControl({ noCache: true }))
  .use(json())
  .use(conditionalGet())
  .use(etag())
  .use(router.routes())
  .use(router.allowedMethods());

http
  .createServer(app.callback())
  .listen(process.env.PORT || 3000, () =>
    console.log('Listening on http://localhost:3000')
  );

// Require all routes
rootRequire('routes/static.js');
rootRequire('routes/index.js');
rootRequire('routes/product.js');
