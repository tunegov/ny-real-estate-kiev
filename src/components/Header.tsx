import React from 'react';

import Menu from './Menu';
import Logo from './Logo';
import { number } from '@constants/index';

import '@styles/components/Header.scss';

const Header = () => {
  return (
    <header className="header">
      <Menu />
      <a className="logo-block" href="/">
        <Logo />
        <h1>Агентство недвижимости "NEW-YORK"</h1>
      </a>
      <a href={`tel:${number}`} className="number">
        {number}
      </a>
    </header>
  );
};

export default Header;
