"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const next_1 = __importDefault(require("next"));
const express_1 = __importDefault(require("express"));
const path_1 = __importDefault(require("path"));
const body_parser_1 = __importDefault(require("body-parser"));
const middleware_1 = __importDefault(require("next-i18next/middleware"));
const api_1 = __importDefault(require("./api"));
// #endregion Global Imports
// #region Local Imports
const i18n_1 = __importDefault(require("./i18n"));
const routes_1 = __importDefault(require("./routes"));
const isPROD = true;
const port = parseInt(process.env.PORT || '80', 10);
const dev = !isPROD;
const app = next_1.default({ dev });
const handler = routes_1.default.getRequestHandler(app);
const handle = app.getRequestHandler();
// const privateKey = fs.readFileSync(
//   path.join(__dirname, '../../privkey.pem'),
//   'utf8'
// );
// const certificate = fs.readFileSync(
//   path.join(__dirname, '../../cert.pem'),
//   'utf8'
// );
// const ca = fs.readFileSync(path.join(__dirname, '../../chain.pem', 'utf8'));
// const credentials = {
//   key: privateKey,
//   cert: certificate,
//   ca: ca
// };
app.prepare().then(() => {
    const server = express_1.default();
    app.setAssetPrefix(process.env.STATIC_PATH);
    server.use(body_parser_1.default.urlencoded({ extended: false }));
    // Parse application/json
    server.use(body_parser_1.default.json());
    server.use(function (req, res, next) {
        res.header('Access-Control-Allow-Origin', '*');
        res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
        next();
    });
    server.use(express_1.default.static(path_1.default.join(__dirname, '../static')));
    server.use('/', express_1.default.static('public'));
    server.use(middleware_1.default(i18n_1.default));
    server.use('/api', api_1.default);
    server.get('*', (req, res) => handler(req, res));
    server.listen(port);
    // createServer(credentials, (req, res) => {
    //   const parsedUrl = parse(req.url!, true);
    //   handle(req, res, parsedUrl);
    // }).listen(port, () => {
    //   console.log(`> Ready on https://localhost:${port}`);
    // });
    // eslint-disable-next-line no-console
    console.log(`> Server listening at http://localhost:${port} as ${dev ? 'development' : process.env.NODE_ENV}`);
});
