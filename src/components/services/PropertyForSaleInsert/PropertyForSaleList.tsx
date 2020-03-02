import React from 'react';
import Plx from 'react-plx';
import { TFunction } from 'next-i18next';

import '@styles/pages/services/PropertyForSaleInsert/PropertyForSaleList.scss';

interface Props {
  items: string[];
  t: TFunction;
  imageClassName?: string;
}

const textParalax = [
  {
    start: 0,
    end: 1200,
    properties: [
      {
        startValue: 100,
        endValue: 0,
        property: 'translateY'
      }
    ]
  }
];

const PropertyForSaleList = (props: Props) => {
  return (
    <Plx parallaxData={textParalax} className="property-for-sale-list">
      <div className="property-for-sale-list-text">
        {props.items.map(item => (
          <p key={item} className="property-for-sale-list-text-li">
            {props.t(item)}
          </p>
        ))}
      </div>
      <div className={`property-for-sale-list-image ${props.imageClassName}`} />
    </Plx>
  );
};

export default PropertyForSaleList;
