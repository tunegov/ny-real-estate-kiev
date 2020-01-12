import React, { useEffect, useState } from 'react';
import Plx from 'react-plx';

import '@styles/components/common/HeaderBlock.scss';

const textParalax = [
  {
    start: 0,
    end: 1200,
    properties: [
      {
        startValue: 0,
        endValue: 400,
        property: 'translateY'
      }
    ]
  }
];

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
    const isMobile = window.innerWidth <= 768;
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
        <div className="header-block-text">
          <div className="header-block-text-title">
            {props.title}
            <div className="header-block-text-title-undeline" />
          </div>

          {!!props.subtitle && (
            <div className="header-block-text-subtitle">{props.subtitle}</div>
          )}
        </div>
      </Plx>
      <div
        style={{ backgroundPosition: `${x}px ${y}px` }}
        className={`header-block-image ${props.imageClassName}`}
      />
    </div>
  );
};

export default HeaderBlock;
