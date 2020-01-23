import React, { useEffect, useState } from 'react';
import Plx from 'react-plx';

import '@styles/pages/parthners/ParthnersAdvantages.scss';

interface Props {
  title?: string;
  subtitle?: string;
}
const textParalax = [
  {
    start: 0,
    end: 500,
    properties: [
      {
        startValue: 150,
        endValue: 0,
        property: 'translateY'
      }
    ]
  }
];

const ParthnersAdvantages = (props: Props) => {
  return (
    <Plx parallaxData={textParalax}>
      <div className="parthners-advantages">
        <div className="parthners-advantages-blocks">
          <div className="parthners-advantages-blocks-block">
            <h3>100</h3>
            <h5>успешных сделок</h5>
          </div>
          <div className="parthners-advantages-blocks-block">
            <h3>+200</h3>
            <h5>новых обьектов</h5>
          </div>
          <div className="parthners-advantages-blocks-block">
            <h3>5</h3>
            <h5>лет работы</h5>
          </div>
          <div className="parthners-advantages-blocks-block">
            <h3>20</h3>
            <h5>профессионалов</h5>
          </div>
        </div>
        <div className="parthners-advantages-text">
          <p className="parthners-advantages-text-title">{props.title}</p>
          <div className="parthners-advantages-line" />
          <p className="parthners-advantages-text-subtitle">{props.subtitle}</p>
        </div>
      </div>
    </Plx>
  );
};

export default ParthnersAdvantages;
