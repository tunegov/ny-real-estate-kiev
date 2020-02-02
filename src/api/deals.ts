import { convertBody, handleResponse } from './index';

import { API_HOST_URL, lang } from '@constants/index';
import { Params } from '@type/deals';

export const search = async (currentPage: number, params: Params) => {
  const url = `${API_HOST_URL}/${lang}/API_serp/search`;
  try {
    const body: Params = {
      currentPage,
      country_id: 'Ukraine',
      region_id: 'Київська область',
      locality_id: 'Київ',
      ...params
    };

    const response = await handleResponse(
      fetch(url, {
        body: convertBody(body, true),
        method: 'POST',
        mode: 'no-cors'
      })
    );

    return response;
  } catch (err) {
    console.error(err);
  }
};

export const getDistricts = async () => {
  const url = `${API_HOST_URL}/${lang}/API_geo/getDistricts`;
  try {
    const body = {
      country_id: 'Ukraine',
      region_id: 'Київська область',
      locality_id: 'Київ'
    };

    const response = await handleResponse(
      fetch(url, {
        body: convertBody(body, true),
        method: 'POST',
        mode: 'no-cors'
      })
    );

    return response;
  } catch (err) {
    console.error(err);
  }
};

export const getSubway = async () => {
  const url = `${API_HOST_URL}/${lang}/API_geo/getSubway`;
  try {
    const body = {
      country_id: 'Ukraine',
      region_id: 'Київська область',
      locality_id: 'Київ'
    };

    const response = await handleResponse(
      fetch(url, {
        body: convertBody(body, true),
        method: 'POST',
        mode: 'no-cors'
      })
    );

    return response;
  } catch (err) {
    console.error(err);
  }
};
