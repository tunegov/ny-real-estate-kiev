import React, { useEffect, useState } from 'react';

import '@styles/pages/services/BuyingPropertyInsert/BuyingPropertyInsert.scss';

interface Props {
  line?: boolean;
  subtitle?: string;
  imageClassName: string;
}

const BuyingPropertyInsert = (props: Props) => {
  return (
    <div className="buying-property-insert">
      <div className="buying-property-insert-line">{props.line}</div>
      <div className="buying-property-insert-text">
        <p className="buying-property-insert-subtitle">{props.subtitle}</p>
      </div>
      <div className={`buying-property-insert-image ${props.imageClassName}`} />
    </div>
  );
};

export default BuyingPropertyInsert;
