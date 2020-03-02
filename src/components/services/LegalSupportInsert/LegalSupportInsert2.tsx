import React from 'react';
import Plx from 'react-plx';

import '@styles/pages/services/LegalSupportInsert/LegalSupportInsert2.scss';

interface Props {
  subtitle?: string;
  imageClassName: string;
}

const textParalax = [
  {
    start: 0,
    end: 600,
    properties: [
      {
        startValue: 100,
        endValue: 0,
        property: 'translateY'
      }
    ]
  }
];

const LegalSupportInsert2 = (props: Props) => {
  return (
    <Plx parallaxData={textParalax} className="legal-support-insert2">
      <div className="legal-support-insert2-text">
        <p className="legal-support-insert2-text-subtitle">{props.subtitle}</p>
      </div>
      <div className={`legal-support-insert2-image ${props.imageClassName}`} />
    </Plx>
  );
};

export default LegalSupportInsert2;
