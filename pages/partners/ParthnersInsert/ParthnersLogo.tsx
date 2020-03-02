import React, { useEffect, useState } from 'react';
import Plx from 'react-plx';

import '@styles/pages/parthners/ParthnersLogo.scss';

interface Props {
  imageClassName?: string;
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

const ParthnersLogo = (props: Props) => {
  return (
    <Plx parallaxData={textParalax}>
      <div className="parthners-logo" />
    </Plx>
  );
};

export default ParthnersLogo;
