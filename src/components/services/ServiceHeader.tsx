import React, { useEffect, useState } from 'react';
import Plx from 'react-plx';
import { motion } from 'framer-motion';

import '@styles/pages/services/ServiceHeader.scss';

const textParalax = [
  {
    start: 0,
    end: 1200,
    properties: [
      {
        startValue: 0,
        endValue: 200,
        property: 'translateY',
      },
    ],
  },
];

const easing = [0.6, -0.05, 0.01, 0.99];

const fadeInHeaderImage = {
  initial: {
    y: 60,
    opacity: 0,
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.5, ease: easing },
  },
};

const fadeInHeaderText = {
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

interface Props {
  title: string;
  subtitle?: string;
  imageClassName: string;
}

const ServiceHeader = (props: Props) => {
  const [x] = useState(0);
  const [y, setY] = useState(-50);
  const movementStrength = 50;

  const onScroll = (e: any) => {
    const y = (window.pageYOffset / movementStrength) * 5 - 50;
    const isMobile = window.innerWidth <= 1024;
    !isMobile &&
      requestAnimationFrame(() => {
        setY(y);
      });
    return () => document.removeEventListener('scroll', onScroll);
  };

  useEffect(() => {
    document.addEventListener('scroll', onScroll);
  }, []);

  return (
    <div className="service-header">
      <motion.div
        variants={fadeInHeaderImage}
        style={{ backgroundPosition: `${x}px ${y}px` }}
        className={`service-header-image ${props.imageClassName}`}
      />
      <Plx parallaxData={textParalax}>
        <motion.div variants={fadeInHeaderText} className="service-header-text">
          <p className="service-header-text-title">{props.title}</p>
          {!!props.subtitle && (
            <p className="service-header-text-subtitle">{props.subtitle}</p>
          )}
        </motion.div>
      </Plx>
    </div>
  );
};

export default ServiceHeader;
