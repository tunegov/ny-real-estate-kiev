"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const axios_1 = __importDefault(require("axios"));
const index_1 = require("@constants/index");
const axiosInstance = axios_1.default.create({
    baseURL: 'https://ny.com.ua'
});
exports.requestInterceptors = axiosInstance.interceptors.request.use(async (request) => {
    request.data = Object.assign(Object.assign({}, (request.data || {})), { version: index_1.API_VERSION, company: index_1.API_COMPANY, access_key: index_1.API_ACCESS_KEY, access_password: index_1.API_ACCESS_PASSWORD });
    return request;
}, error => Promise.reject(error));
exports.default = axiosInstance;
