import React, { useEffect, useState } from 'react';

import '@styles/components/deals/SearchParams.scss';

import TypeParam from './params/TypeParam';
import ClassParam from './params/ClassParam';

import { search, getDistricts, getSubway, view } from '@api/deals';
import {
  ByParamsDeal,
  ByParamsProperty,
  ByParamsGeoSearchBy,
  PriceCurrency,
  PriceKind,
  Params
} from '@type/deals';

interface Props {}

const SearchParams = (props: Props) => {
  const [params, setParams] = useState<Params>({
    deal: 'sell' as ByParamsDeal,
    property: 'flat' as ByParamsProperty,
    // room_count: '1' as ByParamsRoomsCount,
    'price[currency_id]': 'UAH' as PriceCurrency,
    'price[value_from]': 0,
    'price[value_to]': 9999999,
    'price[kind]': 'per_object' as PriceKind
  });

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    await view('RF-1-400-963', 'UAH');
    await getDistricts();
    await getSubway();
    const data = await search(1, params);
    console.log(data);
  };

  const onChange = (key: keyof Params, value: any) => {
    const newParams = { ...params };
    newParams[key] = value;
    setParams(newParams);
  };

  return (
    <div className="deal-search-params">
      <TypeParam field="deal" currentValue={params.deal} onChange={onChange} />
      <ClassParam
        field="housing_class"
        currentValue={params.housing_class}
        onChange={onChange}
      />
    </div>
  );
};

export default SearchParams;
