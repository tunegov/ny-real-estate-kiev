import React, { useEffect, useState } from 'react';
import Plx from 'react-plx';

import '@styles/pages/services/FreeConsultingInsert/FreeConsultingInsert.scss';

const textParalax = [
  {
    start: 0,
    end: 2000,
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
  num1?: string;
  li1?: string;
  num2?: string;
  li2?: string;
  num3?: string;
  li3?: string;
  num4?: string;
  li4?: string;
  num5?: string;
  li5?: string;
  num6?: string;
  li6?: string;
}

const FreeConsultingInsert = (props: Props) => {
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
    <Plx parallaxData={textParalax}>
      <div className="free-consulting-insert">
        <div className="free-consulting-insert-text">
          <div className="free-consulting-insert-numbox">
            <p className="free-consulting-insert-num">{props.num1}</p>
            <p className="free-consulting-insert-num">{props.num2}</p>
            <p className="free-consulting-insert-num">{props.num3}</p>
            <p className="free-consulting-insert-num">{props.num4}</p>
            <p className="free-consulting-insert-num">{props.num5}</p>
            <p className="free-consulting-insert-num">{props.num6}</p>
          </div>
          <div className="free-consulting-insert-libox">
            <p className="free-consulting-insert-li">{props.li1}</p>
            <p className="free-consulting-insert-li">{props.li2}</p>
            <p className="free-consulting-insert-li">{props.li3}</p>
            <p className="free-consulting-insert-li">{props.li4}</p>
            <p className="free-consulting-insert-li">{props.li5}</p>
            <p className="free-consulting-insert-li">{props.li6}</p>
          </div>
        </div>
      </div>
    </Plx>
  );
};

export default FreeConsultingInsert;
