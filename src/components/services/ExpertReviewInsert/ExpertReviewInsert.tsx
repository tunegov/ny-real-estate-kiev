import React from 'react';
import Plx from 'react-plx';
import { motion } from 'framer-motion';

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
        property: 'translateY',
      },
    ],
  },
];

const fadeInBlock = {
  initial: {
    y: 100,
    opacity: 0,
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: { duration: 1 },
  },
};

const ExpertReviewInsert = (props: Props) => {
  return (
    <motion.div variants={fadeInBlock} className="expert-review-insert-outer">
      <Plx parallaxData={textParalax} className="expert-review-insert">
        {/* <div className="expert-review-insert-line" /> */}
        <div className="expert-review-insert-text">
          <p className="expert-review-insert-subtitle">{props.subtitle}</p>
        </div>
      </Plx>
    </motion.div>
  );
};

export default ExpertReviewInsert;
