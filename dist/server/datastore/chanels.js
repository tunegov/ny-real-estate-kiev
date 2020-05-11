"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const nedb_1 = __importDefault(require("nedb"));
const ds = new nedb_1.default({ filename: 'chanels' });
ds.loadDatabase();
exports.insert = (cahtID) => {
    ds.find({ cahtID }, (err) => {
        if (err) {
            ds.insert({ cahtID });
        }
    });
};
exports.getAll = () => {
    return new Promise((resolve, reject) => {
        ds.find({}, (err, docs) => {
            if (!err) {
                resolve(docs);
            }
            else {
                reject(err);
            }
        });
    });
};
