"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const next_1 = __importDefault(require("next"));
const express_1 = __importDefault(require("express"));
const path_1 = __importDefault(require("path"));
const middleware_1 = __importDefault(require("next-i18next/middleware"));
// #endregion Global Imports
// #region Local Imports
const i18n_1 = __importDefault(require("./i18n"));
const routes_1 = __importDefault(require("./routes"));
const port = parseInt(process.env.PORT || '3000', 10);
const dev = process.env.NODE_ENV !== 'production';
const app = next_1.default({ dev });
const handler = routes_1.default.getRequestHandler(app);
app.prepare().then(() => {
    const server = express_1.default();
    app.setAssetPrefix(process.env.STATIC_PATH);
    server.use(express_1.default.static(path_1.default.join(__dirname, '../static')));
    server.use(middleware_1.default(i18n_1.default));
    server.get('*', (req, res) => handler(req, res));
    server.listen(port);
    // eslint-disable-next-line no-console
    console.log(`> Server listening at http://localhost:${port} as ${dev ? 'development' : process.env.NODE_ENV}`);
});
