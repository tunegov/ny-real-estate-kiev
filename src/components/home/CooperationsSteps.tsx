import React, { useState } from 'react';
import { WithTranslation } from 'next-i18next';
import { withTranslation } from '@server/i18n';
import { motion } from 'framer-motion';

import '@styles/components/home/CooperationsSteps.scss';

const TYPES = [
  {
    key: 'buy',
    steps: [
      {
        key: 'application_form',
      },
      {
        key: 'object_selection',
      },
      {
        key: 'show_object',
      },
      {
        key: 'paperwork',
      },
      {
        key: 'make_a_deal',
      },
    ],
  },
  {
    key: 'sell',
    steps: [
      {
        key: 'application_form',
      },
      {
        key: 'expert_object_evaluation',
      },
      {
        key: 'search_customer',
      },
      {
        key: 'paperwork',
      },
      {
        key: 'make_a_deal',
      },
    ],
  },
];

const fadeInTitle = {
  initial: {
    x: -70,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.9 },
  },
};

const fadeInBlock = (index: number) => ({
  initial: {
    y: 30,
  },
  animate: {
    y: 0,
    transition: { duration: 0.4 * index },
  },
});

interface Props extends WithTranslation {}

const CooperationsSteps = ({ t }: Props) => {
  const [type, setType] = useState(TYPES[0].key);

  const steps = TYPES.find((t) => t.key === type)!.steps;
  return (
    <div className="home-cooperations-steps">
      <motion.div variants={fadeInTitle}>
        <h3>{t(`home.cooperation.title`)}</h3>
      </motion.div>
      <div className="home-cooperations-steps-types">
        {TYPES.map((typeItem, i) => (
          <motion.div
            variants={fadeInBlock(i + 1)}
            key={typeItem.key}
            onClick={() => setType(typeItem.key)}
            className={`home-cooperations-steps-types-item ${
              typeItem.key === type ? 'active' : ''
            }`}>
            <p className="home-cooperations-steps-types-item-text">
              {t(`home.cooperation.types.${typeItem.key}`)}
            </p>
          </motion.div>
        ))}
      </div>
      <div className="home-cooperations-steps-list">
        {steps.map((step) => (
          <div key={step.key} className="home-cooperations-steps-list-item">
            <div
              className={`home-cooperations-steps-list-item-image ${step.key}`}></div>
            <p className={`home-cooperations-steps-list-item-text`}>
              {t(`home.cooperation.${type}.${step.key}`)}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default withTranslation('home')(CooperationsSteps);
