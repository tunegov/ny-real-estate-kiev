import axios from 'axios';

import {
  API_VERSION,
  API_COMPANY,
  API_ACCESS_KEY,
  API_ACCESS_PASSWORD
} from '@constants/index';

const axiosInstance = axios.create({
  responseType: 'json',
  headers: { 'X-Requested-With': 'XMLHttpRequest', Accept: 'application/json' }
});

export const requestInterceptors = axiosInstance.interceptors.request.use(
  async request => {
    request.data.version = API_VERSION;
    request.data.company = API_COMPANY;
    request.data.access_key = API_ACCESS_KEY;
    request.data.access_password = API_ACCESS_PASSWORD;

    return request;
  },
  error => Promise.reject(error)
);

export default axiosInstance;
