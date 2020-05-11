import React from 'react';
import { Link } from '@server/routes';
import { TFunction } from 'next-i18next';
import { withTranslation } from '@server/i18n';
import { motion } from 'framer-motion';

import '@styles/components/home/Categories.scss';

const CATEGORIES = [
  {
    key: 'retail',
  },
  {
    key: 'flats',
  },
  {
    key: 'homes',
  },
];

const fadeInBlock = (index: number) => ({
  initial: {
    y: 60,
  },
  animate: {
    y: 0,
    transition: { duration: 0.5 * index },
  },
});

interface Props {
  t: TFunction;
}

const Categories = ({ t }: Props) => {
  return (
    <div className="home-categories">
      {CATEGORIES.map((category, i) => (
        <Link key={category.key} route={`deals/${category.key}`}>
          <motion.div
            variants={fadeInBlock(i)}
            className="home-categories-item">
            <div className={`home-categories-item-image ${category.key}`} />
            <p className="home-categories-item-text">
              {t(`home.categories.${category.key}`)}
            </p>
            <div className={`home-categories-item-underline`} />
          </motion.div>
        </Link>
      ))}
    </div>
  );
};

export default withTranslation('home')(Categories);
