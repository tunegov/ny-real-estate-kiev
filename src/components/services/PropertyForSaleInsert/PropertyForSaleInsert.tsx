import React from 'react';
import Plx from 'react-plx';

import '@styles/pages/services/PropertyForSaleInsert/PropertyForSaleInsert.scss';

interface Props {
  subtitle?: string;
}

const textParalax = [
  {
    start: 0,
    end: 200,
    properties: [
      {
        startValue: 80,
        endValue: 0,
        property: 'translateY'
      }
    ]
  }
];

const PropertyForSaleInsert = (props: Props) => {
  return (
    <Plx parallaxData={textParalax} className="property-for-sale-insert">
      <div className="property-for-sale-insert-text">
        <p className="property-for-sale-insert-subtitle">{props.subtitle}</p>
      </div>
    </Plx>
  );
};

export default PropertyForSaleInsert;
