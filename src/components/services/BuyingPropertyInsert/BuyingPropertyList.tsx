import React, { useEffect, useState } from 'react';
import Plx from 'react-plx';
import { TFunction } from 'next-i18next';

import '@styles/pages/services/BuyingPropertyInsert/BuyingPropertyList.scss';

interface Props {
  items: string[];
  t: TFunction;
}

const textParalax = [
  {
    start: 0,
    end: 1000,
    properties: [
      {
        startValue: 100,
        endValue: 0,
        property: 'translateY'
      }
    ]
  }
];

const BuyingPropertyList = (props: Props) => {
  return (
    <Plx className="buying-property-list" parallaxData={textParalax}>
      <div className="buying-property-list-text">
        {props.items.map(item => (
          <p key={item} className="buying-property-list-text-li">
            {props.t(item)}
          </p>
        ))}
      </div>
    </Plx>
  );
};

export default BuyingPropertyList;
