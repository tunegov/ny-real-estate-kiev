import React from 'react';
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
        <div key={category.key} className="home-categories-item">
          <div className={`home-categories-item-image ${category.key}`} />
          <p className="home-categories-item-text">
            {t(`home.categories.${category.key}`)}
          </p>
          <div className={`home-categories-item-underline`} />
        </div>
      ))}
    </div>
  );
};

export default withTranslation('home')(Categories);
