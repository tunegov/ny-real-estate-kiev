import React from 'react';
import Plx from 'react-plx';
import { motion } from 'framer-motion';

import '@styles/pages/services/BuyingPropertyInsert/BuyingPropertyInsert.scss';

interface Props {
  subtitle?: string;
  imageClassName: string;
}

const textParalax = [
  {
    start: 0,
    end: 300,
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

const fadeInHeaderImage = {
  initial: {
    y: 200,
    opacity: 0,
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: { duration: 1, ease: easing },
  },
};

const BuyingPropertyInsert = (props: Props) => {
  return (
    <Plx parallaxData={textParalax}>
      <motion.div
        variants={fadeInHeaderImage}
        className="buying-property-insert">
        <div className="buying-property-insert-line" />
        <div className="buying-property-insert-text">
          <p className="buying-property-insert-text-subtitle">
            {props.subtitle}
          </p>
        </div>
        <div
          className={`buying-property-insert-image ${props.imageClassName}`}
        />
      </motion.div>
    </Plx>
  );
};

export default BuyingPropertyInsert;
