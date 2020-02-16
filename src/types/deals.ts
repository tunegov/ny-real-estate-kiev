export type SorterFields = 'price' | 'area';
export type SorterDirections = 'asc' | 'desc';

export type ParamsBoolean = '1' | '';

export type PriceCurrency = 'UAH' | 'USD' | 'EUR';
export type PriceKind = 'per_object' | 'per_sqrmeter' | 'per_are';

export type ByParamsDeal = 'by_number' | 'sell' | 'rent_long' | 'rent_day';
export type ByParamsProperty = 'flat' | 'house' | 'commercial' | 'plot';
export type ByParamsRoomsCount = '1' | '2' | '3' | '4' | 'more';
export type ByParamsHousingClass = 'econom' | 'business' | 'elit';
export type ByParamsGeoSearchBy = 'city' | 'area';

export type Params = ParamsCommon & ParamsByNumber & ParamsByParams;

export type ParamsCommon = {
  currentPage?: number;
  rowsPerPage?: number;
  'sorter[field]'?: SorterFields;
  'sorter[direction]'?: SorterDirections;
  'sorter[prevent_media]'?: ParamsBoolean;
  country_id?: string;
  region_id?: string;
  locality_id?: string;
  geo_search_by?: ByParamsGeoSearchBy;
};

export type ParamsByNumber = {
  deal: ByParamsDeal;
  regnumber?: string | string[];
  show_all?: ParamsBoolean;
  'price[currency_id]'?: PriceCurrency;
};

export type ParamsByParams = {
  deal: ByParamsDeal;
  property: ByParamsProperty | ByParamsProperty[];
  prop_kind?: any;
  'price[currency_id]'?: PriceCurrency;
  'price[value_from]'?: number;
  'price[value_to]'?: number;
  'price[kind]'?: PriceKind;
  'area_total[value_from]'?: number;
  'area_total[value_to]'?: number;
  'area_lot[value_from]'?: number;
  'area_lot[value_to]'?: number;
  room_count?: ByParamsRoomsCount;
  housing_class?: ByParamsHousingClass;
  district_id?: string[];
  subway_station?: string[];
  regions_id?: string[];
  is_newbuilding?: ParamsBoolean;
  red_line?: ParamsBoolean;
  without_fee?: ParamsBoolean;
};

export type ParamsView = {
  adid: string;
  currency_id: PriceCurrency;
  site_id?: string;
};

export type ParamsGetDistricts = {
  locality_id: string;
  region_id: string;
};

export type ParamsGetSubway = {
  locality_id: string;
  region_id: string;
};
