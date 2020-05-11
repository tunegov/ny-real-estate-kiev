"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const telegraf_1 = __importDefault(require("telegraf"));
const constants_1 = require("../constants");
const chanels_1 = require("../datastore/chanels");
const bot = new telegraf_1.default(constants_1.TELEGRAM_BOT_API_KEY);
bot.start((ctx) => {
    var _a;
    ctx.reply('Welcome!');
    chanels_1.insert(Number((_a = ctx.chat) === null || _a === void 0 ? void 0 : _a.id));
});
bot.help((ctx) => ctx.reply('Я отправляю все уведомления что приходят с сайта'));
bot.launch();
exports.default = bot;
