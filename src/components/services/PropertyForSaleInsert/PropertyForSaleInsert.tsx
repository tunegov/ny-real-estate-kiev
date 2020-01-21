import React, { useEffect, useState } from 'react';

import '@styles/pages/services/PropertyForSaleInsert/PropertyForSaleInsert.scss';

interface Props {
  subtitle?: string;
}

const PropertyForSaleInsert = (props: Props) => {
  return (
    <div className="property-for-sale-insert">
      <div className="property-for-sale-insert-text">
        <p className="property-for-sale-insert-subtitle">{props.subtitle}</p>
      </div>
    </div>
  );
};

export default PropertyForSaleInsert;
