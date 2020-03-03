import React from 'react';

import Menu from './Menu';
import Logo from './Logo';
import { number } from '@constants/index';
import { withTranslation } from '@server/i18n';

import '@styles/components/Header.scss';
import { WithTranslation } from 'next-i18next';

interface Props extends WithTranslation {}

const Header = ({ t }: Props) => {
  return (
    <header className="header">
      <Menu />
      <a className="logo-block" href="/">
        <Logo />
        <h1>{t('common.agency')}</h1>
      </a>
      <a href={`tel:${number}`} className="number">
        {number}
      </a>
    </header>
  );
};

export default withTranslation('common')(Header);
