import React, { useEffect, useState } from 'react';
import Plx from 'react-plx';
import { motion } from 'framer-motion';

import '@styles/pages/contacts/Contacts.scss';

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
        startValue: 0,
        endValue: 0,
        property: 'translateY',
      },
    ],
  },
];

const easing = [0.6, -0.05, 0.01, 0.99];

const fadeInTitle = {
  initial: {
    x: -100,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.8, ease: easing },
  },
};

const Contacts = (props: Props) => {
  return (
    <Plx parallaxData={textParalax}>
      <div className="contacts">
        <motion.div variants={fadeInTitle} className="contacts-text">
          <p className="contacts-text-title">{props.title}</p>
          <div className="contacts-line" />
        </motion.div>
        <div className="contacts-images" />
      </div>
    </Plx>
  );
};

export default Contacts;
