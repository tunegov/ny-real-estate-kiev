export type SorterFields = 'price' | 'area';
export type SorterDirections = 'asc' | 'desc';

export type ParamsBoolean = '1' | '';

export type PriceCurrency = 'UAH' | 'USD' | 'EUR';
export type PriceKind = 'per_object' | 'per_sqrmeter' | 'per_are';

export type ByParamsDeal = 'by_number' | 'sell' | 'rent_long' | 'rent_day';
export type PropertyTypes = 'flat' | 'house' | 'commercial' | 'plot';
export type ByParamsProperty = PropertyTypes | PropertyTypes[];
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
  housing_class?: ByParamsHousingClass[];
  districts_id?: string[];
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

export interface PriceNative {
  value_m2: any;
  value_are: number;
  value_obj: number;
  value: number;
}

export interface Price {
  value_m2: string;
  value_are: string;
  value_obj: string;
  kind: string;
  currency_id: string;
  value: string;
  native: PriceNative;
}

export interface Media {
  src_small: string;
  src_middle: string;
  src_small_2: string;
  src_middle_2: string;
}

export interface DealItem {
  adid: string;
  state: string;
  deferred_to?: any;
  date_mod: string;
  date_add: string;
  deal: string;
  property: string;
  prop_kind: string;
  price: Price;
  room_count: number;
  storey: number;
  storeys: number;
  area_total: number;
  area_lot?: any;
  red_line?: any;
  region_id: string;
  locality_id: string;
  subway_line: string;
  repair: string;
  is_newbuilding: string;
  property_complex: string;
  housing_class: string;
  wall_material: string;
  not_hide_address: boolean;
  media: Media;
  locality_is_capital: boolean;
  street_alias: string;
  subway_line_alias: string;
  locality: string;
  district: string;
  'deal.value': string;
  'property.value': string;
  'prop_kind.value': string;
  is_mls: boolean;
  street: string;
  subway_station: string;
  buyer_not_pay: boolean;
  housestr: string;
  lat: string;
  lng: string;
  'property_complex.value': string;
}
