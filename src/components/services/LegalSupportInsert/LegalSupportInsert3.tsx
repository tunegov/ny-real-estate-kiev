import React from 'react';
import Plx from 'react-plx';

import '@styles/pages/services/LegalSupportInsert/LegalSupportInsert3.scss';

interface Props {
  subtitle?: string;
}

const textParalax = [
  {
    start: 0,
    end: 1200,
    properties: [
      {
        startValue: 100,
        endValue: 0,
        property: 'translateY'
      }
    ]
  }
];

const LegalSupportInsert3 = (props: Props) => {
  return (
    <Plx parallaxData={textParalax} className="legal-support-insert3">
      <div className="legal-support-insert3-line" />
      <div className="legal-support-insert3-text">
        <p className="legal-support-insert3-text-subtitle">{props.subtitle}</p>
      </div>
    </Plx>
  );
};

export default LegalSupportInsert3;
