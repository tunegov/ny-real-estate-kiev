"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const constants_1 = require("../constants");
const ApiController = express_1.default.Router();
const request_1 = __importDefault(require("request"));
ApiController.post('/get_subway', (req, res) => {
    request_1.default.post(`${constants_1.API_HOST_URL}/${constants_1.lang}/API_geo/getSubway`, {
        formData: req.body
    }, (err, resp, body) => {
        res.send(body);
    });
});
ApiController.post('/get_districts', (req, res) => {
    request_1.default.post(`${constants_1.API_HOST_URL}/${constants_1.lang}/API_geo/getDistricts`, {
        formData: req.body
    }, (err, resp, body) => {
        res.send(body);
    });
});
ApiController.post('/search', (req, res) => {
    request_1.default.post(`${constants_1.API_HOST_URL}/${constants_1.lang}/API_serp/search`, {
        formData: req.body
    }, (err, resp, body) => {
        res.send(body);
    });
});
ApiController.post('/send_message', (req, res) => {
    request_1.default.post(`${constants_1.API_HOST_URL}/${constants_1.lang}/API_user/sendMessage`, {
        formData: req.body
    }, (err, resp, body) => {
        res.send(body);
    });
});
ApiController.post('/view', (req, res) => {
    request_1.default.post(`${constants_1.API_HOST_URL}/${constants_1.lang}/API_view/view`, {
        formData: req.body
    }, (err, resp, body) => {
        res.send(body);
    });
});
exports.default = ApiController;
