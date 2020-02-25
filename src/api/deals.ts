import axios from './index';

import { Params, PriceCurrency } from '@type/deals';

export const search = async (currentPage: number, params: Partial<Params>) => {
  try {
    const body: Partial<Params> = {
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

    const { data } = await axios.post('/api/search', body);

    return data.data;
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

    return await axios.post('/api/view', body);
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

    const { data } = await axios.post('/api/get_Districts', body);

    return convertData(data);
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

    const { data } = await axios.post('/api/get_subway', body);

    return data;
  } catch (err) {
    console.error(err);
  }
};

const convertData = (data: DataObject): Data[] => {
  return Object.keys(data).map(key => ({
    ...data[key],
    id: key
  }));
};

export type Data = {
  id?: string;
  value: string;
  caption: string;
};

export type DataWithItems = {
  id?: string;
  value: string;
  caption: string;
  items: Data[];
};

export type DataObject = {
  [key: string]: Data;
};
