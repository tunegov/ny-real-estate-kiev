import React, { useEffect, useState } from 'react';

import '@styles/components/deals/SearchParams.scss';

import TypeParam from './params/TypeParam';
import ClassParam from './params/ClassParam';
import DistrictParam from './params/DistrictParam';
import SubwayParam from './params/SubwayParam';
import PriceParam from './params/PriceParam';
import AreaParam from './params/AreaParam';

import { Params } from '@type/deals';

interface Props {
  params: Partial<Params>;
  onChange: any;
}

const SearchParams = (props: Props) => {
  return (
    <div className="deal-header-bottom">
      <div className="deal-search-params">
        <TypeParam
          field="deal"
          currentValue={props.params.deal!}
          onChange={props.onChange}
        />
        <ClassParam
          field="housing_class"
          currentValue={props.params.housing_class || []}
          onChange={props.onChange}
        />
        <DistrictParam
          field="districts_id"
          currentValue={props.params.districts_id || []}
          onChange={props.onChange}
        />
        <SubwayParam
          field="subway_station"
          currentValue={props.params.subway_station || []}
          onChange={props.onChange}
        />
        <PriceParam
          value_from={props.params['price[value_from]']!}
          value_to={props.params['price[value_to]']!}
          currency_id={props.params['price[currency_id]'] || 'UAH'}
          kind={props.params['price[kind]'] || 'per_object'}
          onChange={props.onChange}
        />
        <AreaParam
          value_from={props.params['area_total[value_from]']!}
          value_to={props.params['area_total[value_to]']!}
          onChange={props.onChange}
        />
      </div>
    </div>
  );
};

export default SearchParams;
