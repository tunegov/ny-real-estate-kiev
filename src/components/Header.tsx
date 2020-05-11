import React from 'react';

import Menu from './Menu';
import Logo from './Logo';
import { number } from '@constants/index';
import { withTranslation } from '@server/i18n';
import { Link } from '@server/routes';

import '@styles/components/Header.scss';
import { WithTranslation } from 'next-i18next';

interface Props extends WithTranslation {}

const Header = ({ t }: Props) => {
  return (
    <header className="header">
      <Menu />
      <Link route="/">
        <div className="logo-block">
          <Logo />
          <h1>{t('common.agency')}</h1>
        </div>
      </Link>
      <a href={`tel:${number}`} className="number">
        {number}
      </a>
    </header>
  );
};

export default withTranslation('common')(Header);
