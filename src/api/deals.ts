import axios from './index';

import { Params, PriceCurrency } from '@type/deals';

export const search = async (currentPage: number, params: Params) => {
  try {
    const body: Params = {
      currentPage,
      rowsPerPage: 50,
      country_id: 'Ukraine',
      region_id: 'Київська область',
      locality_id: 'Київ',
      geo_search_by: 'city',
      'sorter[field]': 'price',
      'sorter[direction]': 'asc',
      ...params
    };

    return await axios.post('/search', body);
  } catch (err) {
    console.error(err);
  }
};

export const view = async (adid: string, currency_id: PriceCurrency) => {
  try {
    const body = {
      adid,
      currency_id
    };

    return await axios.post('/view', body);
  } catch (err) {
    console.error(err);
  }
};

export const getDistricts = async () => {
  try {
    const body = {
      country_id: 'Ukraine',
      region_id: 'Київська область',
      locality_id: 'Київ',
      geo_search_by: 'city',
      'sorter[field]': 'area',
      'sorter[direction]': 'asc'
    };

    return await axios.post('/get_Districts', body);
  } catch (err) {
    console.error(err);
  }
};

export const getSubway = async () => {
  try {
    const body = {
      country_id: 'Ukraine',
      region_id: 'Київська область',
      locality_id: 'Київ',
      geo_search_by: 'city',
      'sorter[field]': 'area',
      'sorter[direction]': 'asc'
    };

    return await axios.post('/get_subway', body);
  } catch (err) {
    console.error(err);
  }
};
