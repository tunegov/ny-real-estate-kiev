import React from 'react';
import Plx from 'react-plx';
import { motion } from 'framer-motion';

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

const LegalSupportInsert = (props: Props) => {
  return (
    <motion.div variants={fadeInBlock}>
      <Plx parallaxData={textParalax} className="legal-support-insert">
        <div className="legal-support-insert-text">
          <p className="legal-support-insert-text-subtitle">{props.subtitle}</p>
        </div>
      </Plx>
    </motion.div>
  );
};

export default LegalSupportInsert;
