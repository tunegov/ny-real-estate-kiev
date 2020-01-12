import React, { useEffect, useState } from 'react';
import Plx from 'react-plx';

import '@styles/pages/services/ServiceHeader.scss';

const textParalax = [
  {
    start: 0,
    end: 1200,
    properties: [
      {
        startValue: 0,
        endValue: 200,
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
      <Plx parallaxData={textParalax}>
        <div className="service-header-text">
          <div className="service-header-text-title">{props.title}</div>
          {!!props.subtitle && (
            <div className="service-header-text-subtitle">{props.subtitle}</div>
          )}
        </div>
      </Plx>
      <div
        style={{ backgroundPosition: `${x}px ${y}px` }}
        className={`service-header-image ${props.imageClassName}`}
      />
    </div>
  );
};

export default ServiceHeader;
