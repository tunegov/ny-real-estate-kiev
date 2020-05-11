import React from 'react';
import Plx from 'react-plx';
import { motion } from 'framer-motion';

import '@styles/pages/services/ExpertReviewInsert/ExpertReviewInsert2.scss';

interface Props {
  li1?: string;
  li2?: string;
  li3?: string;
  li4?: string;
  imageClassName: string;
}

const textParalax = [
  {
    start: 0,
    end: 550,
    properties: [
      {
        startValue: 100,
        endValue: 0,
        property: 'translateY',
      },
    ],
  },
];

const fadeInBlock = {
  initial: {
    x: 100,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: { duration: 1.1 },
  },
};

const ExpertReviewInsert2 = (props: Props) => {
  return (
    <motion.div variants={fadeInBlock}>
      <Plx parallaxData={textParalax} className="expert-review-insert2">
        <div className="expert-review-insert2-text">
          <p className="expert-review-insert2-li">{props.li1}</p>
          <p className="expert-review-insert2-li">{props.li2}</p>
          <p className="expert-review-insert2-li">{props.li3}</p>
        </div>
        <div
          className={`expert-review-insert2-image ${props.imageClassName}`}
        />
      </Plx>
    </motion.div>
  );
};

export default ExpertReviewInsert2;
