import React from 'react';
import Plx from 'react-plx';

import Header from './Header';
import Footer from './Footer';

import '@styles/components/Content.scss';

const paralax = [
  {
    start: 0,
    end: 1200,
    properties: [
      {
        startValue: 0,
        endValue: 100,
        property: 'translateY'
      }
    ]
  }
];

interface Props {
  children: any;
  withPattern?: boolean;
}

const Content = ({ children, withPattern }: Props) => (
  <>
    <Header />
    <div className={`content ${withPattern ? 'with-pattern' : ''}`}>
      {children}

      <Plx className="content-pattern-right" parallaxData={paralax} />
      <Plx className="content-pattern-left" parallaxData={paralax} />
    </div>
    <Footer />
  </>
);

export default Content;
