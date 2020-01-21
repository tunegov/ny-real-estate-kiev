import React, { useEffect, useState } from 'react';

import '@styles/pages/services/BuyingPropertyInsert/BuyingPropertyList.scss';

interface Props {
  li1?: string;
  li2?: string;
  li3?: string;
  li4?: string;
  li5?: string;
  li6?: string;
  li7?: string;
}

const BuyingPropertyList = (props: Props) => {
  return (
    <div className="buying-property-list">
      <div className="buying-property-list-text">
        <p className="buying-property-list-li">{props.li1}</p>
        <p className="buying-property-list-li">{props.li2}</p>
        <p className="buying-property-list-li">{props.li3}</p>
        <p className="buying-property-list-li">{props.li4}</p>
        <p className="buying-property-list-li">{props.li5}</p>
        <p className="buying-property-list-li">{props.li6}</p>
        <p className="buying-property-list-li">{props.li7}</p>
      </div>
    </div>
  );
};

export default BuyingPropertyList;
