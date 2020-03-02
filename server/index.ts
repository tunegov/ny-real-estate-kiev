import next from 'next';
import express from 'express';
import path from 'path';
import fs from 'fs';
import https from 'https';
import bodyParser from 'body-parser';
import nextI18NextMiddleware from 'next-i18next/middleware';
import api from './api';
// #endregion Global Imports

// #region Local Imports
import nextI18next from './i18n';
import routes from './routes';

const isPROD = true;

const port = parseInt(process.env.PORT || '80', 10);
const dev = !isPROD;
const app = next({ dev });
const handler = routes.getRequestHandler(app);

const privateKey = fs.readFileSync(
  '/etc/letsencrypt/live/yourdomain.com/privkey.pem',
  'utf8'
);
const certificate = fs.readFileSync(
  '/etc/letsencrypt/live/yourdomain.com/cert.pem',
  'utf8'
);
const ca = fs.readFileSync(
  '/etc/letsencrypt/live/yourdomain.com/chain.pem',
  'utf8'
);

const credentials = {
  key: privateKey,
  cert: certificate,
  ca: ca
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

  server.get('*', (req, res) => handler(req, res));

  server.listen(port);

  const httpsServer = https.createServer(credentials, server);

  httpsServer.listen(443, () => {
    console.log('HTTPS Server running on port 443');
  });

  // eslint-disable-next-line no-console
  console.log(
    `> Server listening at http://localhost:${port} as ${
      dev ? 'development' : process.env.NODE_ENV
    }`
  );
});
