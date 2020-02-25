import React, { useEffect, useState } from 'react';
import Plx from 'react-plx';

import '@styles/pages/services/FreeConsultingInsert/FreeConsultingInsert.scss';
import { TFunction } from 'next-i18next';

const textParalax = [
  {
    start: 0,
    end: 500,
    properties: [
      {
        startValue: 60,
        endValue: 0,
        property: 'translateY'
      }
    ]
  }
];

interface Props {
  items: string[];
  t: TFunction;
}

const FreeConsultingInsert = (props: Props) => {
  return (
    <Plx parallaxData={textParalax} className="free-consulting-insert">
      <div className="free-consulting-insert-text">
        {props.items.map((item, i) => (
          <div className="free-consulting-insert-text-inner">
            <p key={i} className="free-consulting-insert-text-num">
              0{i + 1}
            </p>
            <p key={i} className="free-consulting-insert-text-li">
              {props.t(item)}
            </p>
          </div>
        ))}
      </div>
      <div className="free-consulting-insert-line" />
    </Plx>
  );
};

export default FreeConsultingInsert;
