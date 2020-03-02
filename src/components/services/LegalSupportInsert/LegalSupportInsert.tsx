import React from 'react';
import Plx from 'react-plx';

import '@styles/pages/services/LegalSupportInsert/LegalSupportInsert.scss';

interface Props {
  subtitle?: string;
}

const textParalax = [
  {
    start: 0,
    end: 300,
    properties: [
      {
        startValue: 70,
        endValue: 0,
        property: 'translateY'
      }
    ]
  }
];

const LegalSupportInsert = (props: Props) => {
  return (
    <Plx parallaxData={textParalax} className="legal-support-insert">
      <div className="legal-support-insert-text">
        <p className="legal-support-insert-text-subtitle">{props.subtitle}</p>
      </div>
    </Plx>
  );
};

export default LegalSupportInsert;
