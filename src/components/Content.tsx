import React from 'react';

import Header from './Header';
import Footer from './Footer';

import '@styles/components/Content.scss';

interface Props {
  children: any;
}

const Content = ({ children }: Props) => (
  <>
    <Header />
    <div className="content">{children}</div>
    <Footer />
  </>
);

export default Content;
