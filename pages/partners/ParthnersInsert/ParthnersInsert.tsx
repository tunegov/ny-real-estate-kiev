import React, { useEffect, useState } from 'react';
import Plx from 'react-plx';

import '@styles/pages/parthners/ParthnersInsert.scss';

interface Props {
  title?: string;
  subtitle?: string;
}

const textParalax = [
  {
    start: 0,
    end: 200,
    properties: [
      {
        startValue: 50,
        endValue: 0,
        property: 'translateY'
      }
    ]
  }
];

const ParthnersInsert = (props: Props) => {
  return (
    <Plx parallaxData={textParalax}>
      <div className="parthners-insert">
        <div className="parthners-insert-text">
          <p className="parthners-insert-text-title">{props.title}</p>
          <div className="parthners-insert-line" />
          <p className="parthners-insert-text-subtitle">{props.subtitle}</p>
        </div>
      </div>
    </Plx>
  );
};

export default ParthnersInsert;
