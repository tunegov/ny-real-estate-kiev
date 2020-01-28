import axios from 'axios';

import {
  API_VERSION,
  API_COMPANY,
  API_ACCESS_KEY,
  API_ACCESS_PASSWORD
} from '@constants/index';

export const convertBody = (body: any, isFormData?: boolean) => {
  body = {
    ...body,
    version: API_VERSION,
    company: API_COMPANY,
    access_key: API_ACCESS_KEY,
    access_password: API_ACCESS_PASSWORD
  };

  if (!isFormData) {
    return body;
  }

  const form_data = new FormData();

  for (let key in body) {
    form_data.append(key, body[key]);
  }

  return form_data;
};

export const handleResponse = async (request: Promise<Response>) => {
  try {
    const response = await request;
    const contentType = response.headers.get('content-type');
    if (contentType && contentType.indexOf('application/json') !== -1) {
      return await response.json();
    } else {
      return {
        text: await response.text()
      };
    }
  } catch (err) {
    console.error(err);
  }
};
