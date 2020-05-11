import React, { useEffect, useState } from 'react';
import Plx from 'react-plx';
import { motion } from 'framer-motion';

import '@styles/components/common/HeaderBlock.scss';

const textParalax = [
  {
    start: 0,
    end: 1200,
    properties: [
      {
        startValue: 0,
        endValue: 300,
        property: 'translateY',
      },
    ],
  },
];

const easing = [0.6, -0.05, 0.01, 0.99];

const fadeInHeaderBlock = {
  initial: {
    y: -200,
    opacity: 0,
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.8, ease: easing },
  },
};

const fadeInHeaderImage = {
  initial: {
    y: 60,
    opacity: 0,
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: { duration: 1, ease: easing },
  },
};

interface Props {
  title: string;
  subtitle?: string;
  imageClassName: string;
}

const HeaderBlock = (props: Props) => {
  const [x] = useState(0);
  const [y, setY] = useState(0);
  const movementStrength = 50;

  const onScroll = (e: any) => {
    const y = -(window.pageYOffset / movementStrength) * 10;
    const isMobile = window.innerWidth <= 1024;
    !isMobile &&
      requestAnimationFrame(() => {
        setY(y);
      });
  };

  useEffect(() => {
    document.addEventListener('scroll', onScroll);
    return () => {
      document.removeEventListener('scroll', onScroll);
    };
  }, []);

  return (
    <div className="header-block">
      <Plx parallaxData={textParalax}>
        <motion.div variants={fadeInHeaderBlock} className="header-block-text">
          <p className="header-block-text-title">
            {props.title}
            <div className="header-block-text-title-undeline" />
          </p>

          {!!props.subtitle && (
            <p className="header-block-text-subtitle">{props.subtitle}</p>
          )}
        </motion.div>
      </Plx>
      <motion.div
        variants={fadeInHeaderImage}
        style={{ backgroundPosition: `${x}px ${y}px` }}
        className={`header-block-image ${props.imageClassName}`}
      />
    </div>
  );
};

export default HeaderBlock;
