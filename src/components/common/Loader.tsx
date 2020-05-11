import React from 'react';
import Logo from '@components/Logo';

import '@styles/components/common/Loader.scss';

interface Props {
  show: boolean;
  children: any;
}

const Loader = ({ show, children }: Props) => {
  if (!show) {
    return <div className="loader-content">{children}</div>;
  }
  return <div className="loader-outer">{/* <Logo /> */}</div>;
};

export default Loader;
