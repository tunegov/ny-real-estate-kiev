"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const next_i18next_1 = __importDefault(require("next-i18next"));
const NextI18NextInstance = new next_i18next_1.default({
    defaultLanguage: 'ua',
    otherLanguages: ['ru'],
    serverLanguageDetection: true,
    browserLanguageDetection: true
});
exports.default = NextI18NextInstance;
/* Optionally, export class methods as named exports */
exports.appWithTranslation = NextI18NextInstance.appWithTranslation, exports.withTranslation = NextI18NextInstance.withTranslation;
