import React, { useEffect, useState } from 'react';
import Plx from 'react-plx';

import '@styles/pages/services/BuyingPropertyInsert/BuyingPropertyMap.scss';

interface Props {
  title?: string;
  subtitle?: string;
  imageClassName: string;
}

const textParalax = [
  {
    start: 0,
    end: 600,
    properties: [
      {
        startValue: 70,
        endValue: 0,
        property: 'translateY'
      }
    ]
  }
];

const BuyingPropertyMap = (props: Props) => {
  return (
    <Plx className="buying-property-map" parallaxData={textParalax}>
      <div className="buying-property-map-text">
        <p className="buying-property-map-text-title">{props.title}</p>
        <p className="buying-property-map-text-subtitle">{props.subtitle}</p>
      </div>

      <div className={`buying-property-map-image ${props.imageClassName}`} />
    </Plx>
  );
};

export default BuyingPropertyMap;
