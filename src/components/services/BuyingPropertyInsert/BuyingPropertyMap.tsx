import React, { useEffect, useState } from 'react';
import Plx from 'react-plx';

import '@styles/pages/services/BuyingPropertyInsert/BuyingPropertyMap.scss';

interface Props {
  title?: string;
  subtitle?: string;
  imageClassName: string;
}

const BuyingPropertyMap = (props: Props) => {
  return (
    <div className="buying-property-map">
      <div className="buying-property-map-text">
        <p className="buying-property-map-title">{props.title}</p>
        <p className="buying-property-map-subtitle">{props.subtitle}</p>
      </div>

      <div className={`buying-property-map-image ${props.imageClassName}`} />
    </div>
  );
};

export default BuyingPropertyMap;
