import React, { useEffect, useState } from 'react';
import Plx from 'react-plx';
import { motion } from 'framer-motion';

import '@styles/pages/services/FreeConsultingInsert/FreeConsultingInsert.scss';
import { TFunction } from 'next-i18next';

const textParalax = [
  {
    start: 0,
    end: 500,
    properties: [
      {
        startValue: 60,
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

interface Props {
  items: string[];
  t: TFunction;
}

const FreeConsultingInsert = (props: Props) => {
  return (
    <motion.div variants={fadeInBlock}>
      <Plx parallaxData={textParalax} className="free-consulting-insert">
        <div className="free-consulting-insert-text">
          {props.items.map((item, i) => (
            <div className="free-consulting-insert-text-inner">
              <p key={i} className="free-consulting-insert-text-num">
                0{i + 1}
              </p>
              <p key={i} className="free-consulting-insert-text-li">
                {props.t(item)}
              </p>
            </div>
          ))}
        </div>
        <div className="free-consulting-insert-line" />
      </Plx>
    </motion.div>
  );
};

export default FreeConsultingInsert;
