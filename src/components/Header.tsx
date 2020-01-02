import React from 'react';

import Menu from './Menu';

import '@styles/components/Header.scss';

const Header = () => {
  return (
    <header className="header">
      <Menu />
    </header>
  );
};

export default Header;
