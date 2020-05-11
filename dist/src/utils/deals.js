"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.parseImg = (uri) => {
    return 'https://' + uri.replace('//', '');
};
