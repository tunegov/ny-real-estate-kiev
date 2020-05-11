import React, { useEffect, useState } from 'react';
import Plx from 'react-plx';
import { motion } from 'framer-motion';

import Button from '@components/Button';

import '@styles/components/home/Header.scss';

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

const fadeInBlock = {
  initial: {
    y: 30,
    opacity: 0,
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.9 },
  },
};

interface Props {
  buttonLabel: string;
  buttonOnClick: any;
}

const HeaderBlock = (props: Props) => {
  const [x] = useState(0);
  const [y, setY] = useState(0);
  const movementStrength = 100;

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
    <div className="home-header">
      <Plx parallaxData={textParalax}>
        <motion.div variants={fadeInBlock} className="home-header-content">
          <Button title={props.buttonLabel} onClick={props.buttonOnClick} />
        </motion.div>
      </Plx>
      <div
        style={{ backgroundPosition: `${x}px ${y}px` }}
        className={`home-header-image`}
      />
    </div>
  );
};

export default HeaderBlock;
