import React, { useEffect, useState } from 'react';

import '@styles/pages/services/PropertyForSaleInsert/PropertyForSaleList.scss';

interface Props {
  li1?: string;
  li2?: string;
  li3?: string;
  li4?: string;
  li5?: string;
  li6?: string;
  li7?: string;
  imageClassName?: string;
}

const PropertyForSaleList = (props: Props) => {
  return (
    <div className="property-for-sale-list">
      <div className="property-for-sale-list-text">
        <p className="property-for-sale-list-li">{props.li1}</p>
        <p className="property-for-sale-list-li">{props.li2}</p>
        <p className="property-for-sale-list-li">{props.li3}</p>
        <p className="property-for-sale-list-li">{props.li4}</p>
        <p className="property-for-sale-list-li">{props.li5}</p>
        <p className="property-for-sale-list-li">{props.li6}</p>
        <p className="property-for-sale-list-li">{props.li7}</p>
      </div>
      <div className={`property-for-sale-list-image ${props.imageClassName}`} />
    </div>
  );
};

export default PropertyForSaleList;
