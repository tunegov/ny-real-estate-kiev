import React from 'react';
import Plx from 'react-plx';

import '@styles/pages/services/BuyingPropertyInsert/BuyingPropertyInsert.scss';

interface Props {
  subtitle?: string;
  imageClassName: string;
}

const textParalax = [
  {
    start: 0,
    end: 300,
    properties: [
      {
        startValue: 80,
        endValue: 0,
        property: 'translateY'
      }
    ]
  }
];

const BuyingPropertyInsert = (props: Props) => {
  return (
    <Plx parallaxData={textParalax}>
      <div className="buying-property-insert">
        <div className="buying-property-insert-line" />
        <div className="buying-property-insert-text">
          <p className="buying-property-insert-text-subtitle">
            {props.subtitle}
          </p>
        </div>
        <div
          className={`buying-property-insert-image ${props.imageClassName}`}
        />
      </div>
    </Plx>
  );
};

export default BuyingPropertyInsert;
