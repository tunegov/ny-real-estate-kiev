import React from 'react';
import Plx from 'react-plx';

import '@styles/pages/services/FreeConsultingInsert/FreeConsultingInsert2.scss';

interface Props {
  subtitle?: string;
}

const textParalax = [
  {
    start: 0,
    end: 800,
    properties: [
      {
        startValue: 140,
        endValue: 0,
        property: 'translateY'
      }
    ]
  }
];

const FreeConsultingInsert2 = (props: Props) => {
  return (
    <Plx parallaxData={textParalax} className="free-consulting-insert2">
      <div className="free-consulting-insert2-text">
        <p className="free-consulting-insert2-subtitle">{props.subtitle}</p>
      </div>
    </Plx>
  );
};

export default FreeConsultingInsert2;
