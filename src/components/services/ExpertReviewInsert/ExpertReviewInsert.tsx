import React from 'react';
import Plx from 'react-plx';

import '@styles/pages/services/ExpertReviewInsert/ExpertReviewInsert.scss';

interface Props {
  subtitle?: string;
  line?: string;
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

const ExpertReviewInsert = (props: Props) => {
  return (
    <Plx parallaxData={textParalax} className="expert-review-insert">
      <div className="expert-review-insert-line" />
      <div className="expert-review-insert-text">
        <p className="expert-review-insert-subtitle">{props.subtitle}</p>
      </div>
    </Plx>
  );
};

export default ExpertReviewInsert;
