import next from 'next';
import express from 'express';
import path from 'path';
import fs from 'fs';
import { createServer } from 'https';
import { parse } from 'url';
import bodyParser from 'body-parser';
import nextI18NextMiddleware from 'next-i18next/middleware';
import api from './api';
// #endregion Global Imports

// #region Local Imports
import nextI18next from './i18n';
import routes from './routes';

const port = parseInt(process.env.PORT || '3000', 10);
const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handler = routes.getRequestHandler(app);
const handle = app.getRequestHandler();

const key = fs.readFileSync(path.join(__dirname, '../../pk.pem'));
const cert = fs.readFileSync(path.join(__dirname, '../../fc.pem'));
// const ca = fs.readFileSync(path.join(__dirname, '../../fc.pem'), 'utf8');

const credentials = {
  key,
  cert
};

app.prepare().then(() => {
  const server = express();

  app.setAssetPrefix(process.env.STATIC_PATH);
  server.use(bodyParser.urlencoded({ extended: false }));
  // Parse application/json
  server.use(bodyParser.json());

  server.use(function(req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header(
      'Access-Control-Allow-Headers',
      'Origin, X-Requested-With, Content-Type, Accept'
    );
    next();
  });

  server.use(express.static(path.join(__dirname, '../static')));
  server.use('/', express.static('public'));

  server.use(nextI18NextMiddleware(nextI18next));
  server.use('/api', api);

  server.get('*', (req, res) => {
    console.log(req);
    handler(req, res);
  });

  server.get('*', (req, res) => {
    if (!dev) {
      res.writeHead(301, {
        Location: 'https://' + req.headers['host'] + req.url
      });
      res.end();
    }
  });

  server.listen(port);

  createServer(credentials, server).listen(3001, () => {
    console.log(`> Ready on https://localhost:3001`);
  });

  // eslint-disable-next-line no-console
  console.log(
    `> Server listening at http://localhost:${port} as ${
      dev ? 'development' : process.env.NODE_ENV
    }`
  );
});
