"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const index_1 = __importDefault(require("./index"));
exports.search = async (currentPage, params) => {
    try {
        const body = Object.assign({ currentPage, rowsPerPage: 50, country_id: 'Ukraine', region_id: 'Київська область', locality_id: 'Київ', geo_search_by: 'city', 'sorter[field]': 'price', 'sorter[direction]': 'asc' }, params);
        const { data } = await index_1.default.post('/api/search', body);
        return data.data;
    }
    catch (err) {
        console.error(err);
    }
};
exports.view = async (adid, currency_id) => {
    try {
        const body = {
            adid,
            currency_id
        };
        return await index_1.default.post('/api/view', body);
    }
    catch (err) {
        console.error(err);
    }
};
exports.getDistricts = async () => {
    try {
        const body = {
            country_id: 'Ukraine',
            region_id: 'Київська область',
            locality_id: 'Київ',
            geo_search_by: 'city',
            'sorter[field]': 'area',
            'sorter[direction]': 'asc'
        };
        const { data } = await index_1.default.post('/api/get_Districts', body);
        return convertData(data);
    }
    catch (err) {
        console.error(err);
    }
};
exports.getSubway = async () => {
    try {
        const body = {
            country_id: 'Ukraine',
            region_id: 'Київська область',
            locality_id: 'Київ',
            geo_search_by: 'city',
            'sorter[field]': 'area',
            'sorter[direction]': 'asc'
        };
        const { data } = await index_1.default.post('/api/get_subway', body);
        return data;
    }
    catch (err) {
        console.error(err);
    }
};
const convertData = (data) => {
    return Object.keys(data).map(key => (Object.assign(Object.assign({}, data[key]), { id: key })));
};
