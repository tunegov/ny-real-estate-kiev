import React from 'react';
import Plx from 'react-plx';
import { motion } from 'framer-motion';

import '@styles/pages/services/PropertyForSaleInsert/PropertyForSaleInsert.scss';

interface Props {
  subtitle?: string;
}

const textParalax = [
  {
    start: 0,
    end: 200,
    properties: [
      {
        startValue: 80,
        endValue: 0,
        property: 'translateY',
      },
    ],
  },
];

const easing = [0.6, -0.05, 0.01, 0.99];

const fadeInBlock = {
  initial: {
    y: 100,
    opacity: 0,
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: { duration: 1.2, ease: easing },
  },
};

const PropertyForSaleInsert = (props: Props) => {
  return (
    <motion.div variants={fadeInBlock}>
      <Plx parallaxData={textParalax} className="property-for-sale-insert">
        <div className="property-for-sale-insert-text">
          <p className="property-for-sale-insert-subtitle">{props.subtitle}</p>
        </div>
      </Plx>
    </motion.div>
  );
};

export default PropertyForSaleInsert;
