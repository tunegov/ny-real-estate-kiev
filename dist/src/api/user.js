"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const index_1 = __importDefault(require("./index"));
const index_2 = require("@constants/index");
exports.sendMessageToEmail = async (message, email) => {
    try {
        const body = {
            user_id: index_2.ADMIN_USER_ID,
            sendToEmail: '1',
            message,
            email,
        };
        return await index_1.default.post('/api/send_message', body);
    }
    catch (err) {
        console.error(err);
    }
};
