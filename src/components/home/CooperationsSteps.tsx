import React, { useState } from 'react';
import { TFunction } from 'next-i18next';
import { withTranslation } from '@server/i18n';

import '@styles/components/home/CooperationsSteps.scss';

const TYPES = [
  {
    key: 'buy',
    steps: [
      {
        key: 'application_form'
      },
      {
        key: 'object_selection'
      },
      {
        key: 'show_object'
      },
      {
        key: 'paperwork'
      },
      {
        key: 'make_a_deal'
      }
    ]
  },
  {
    key: 'sell',
    steps: [
      {
        key: 'application_form'
      },
      {
        key: 'expert_object_evaluation'
      },
      {
        key: 'search_customer'
      },
      {
        key: 'paperwork'
      },
      {
        key: 'make_a_deal'
      }
    ]
  }
];

interface Props {
  t: TFunction;
}

const CooperationsSteps = ({ t }: Props) => {
  const [type, setType] = useState(TYPES[0].key);

  const steps = TYPES.find(t => t.key === type)!.steps;
  return (
    <div className="home-cooperations-steps">
      <h3>{t(`home.cooperation.title`)}</h3>
      <div className="home-cooperations-steps-types">
        {TYPES.map(typeItem => (
          <div
            onClick={() => setType(typeItem.key)}
            className={`home-cooperations-steps-types-item ${
              typeItem.key === type ? 'active' : ''
            }`}>
            <p className="home-cooperations-steps-types-item-text">
              {t(`home.cooperation.types.${typeItem.key}`)}
            </p>
          </div>
        ))}
      </div>
      <div className="home-cooperations-steps-list">
        {steps.map(step => (
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
