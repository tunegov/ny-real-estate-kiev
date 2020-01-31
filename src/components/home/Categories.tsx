import React from 'react';
import Link from 'next/link';
import { TFunction } from 'next-i18next';
import { withTranslation } from '@server/i18n';

import '@styles/components/home/Categories.scss';

const CATEGORIES = [
  {
    key: 'retail'
  },
  {
    key: 'flats'
  },
  {
    key: 'offices'
  },
  {
    key: 'homes'
  }
];

interface Props {
  t: TFunction;
}

const Categories = ({ t }: Props) => {
  return (
    <div className="home-categories">
      {CATEGORIES.map(category => (
        <Link key={category.key} href={`deals/${category.key}`}>
          <div className="home-categories-item">
            <div className={`home-categories-item-image ${category.key}`} />
            <p className="home-categories-item-text">
              {t(`home.categories.${category.key}`)}
            </p>
            <div className={`home-categories-item-underline`} />
          </div>
        </Link>
      ))}
    </div>
  );
};

export default withTranslation('home')(Categories);
