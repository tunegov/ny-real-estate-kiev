import axios from 'axios';

import {
  API_HOST_URL,
  API_VERSION,
  API_COMPANY,
  API_ACCESS_KEY,
  API_ACCESS_PASSWORD
} from '@constants/index';

const axiosInstance = axios.create({
  baseURL: 'https://ny.com.ua'
});

export const requestInterceptors = axiosInstance.interceptors.request.use(
  async request => {
    request.data = {
      ...(request.data || {}),
      version: API_VERSION,
      company: API_COMPANY,
      access_key: API_ACCESS_KEY,
      access_password: API_ACCESS_PASSWORD
    };

    return request;
  },
  error => Promise.reject(error)
);

export default axiosInstance;
