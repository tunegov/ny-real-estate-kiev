"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// #region Global Imports
const next_routes_1 = __importDefault(require("next-routes"));
// #endregion Global Imports
const routes = new next_routes_1.default();
routes.add('home', '/');
routes.add('team', '/team');
routes.add('services', '/services');
routes.add('services/:sid', '/services');
routes.add('deals/:did', '/deals');
routes.add('deals/view/:id', '/deals/view');
routes.add('jobs', '/jobs');
routes.add('partners', '/partners');
routes.add('contacts', '/contacts');
routes.add('*', '/');
exports.Link = routes.Link;
exports.default = routes;
