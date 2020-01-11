import React from 'react';
import { TFunction } from 'next-i18next';

import ServiceHeader from './ServiceHeader';

interface Props {
  t: TFunction;
}

const ExpertReview = ({ t }: Props) => {
  return (
    <div className="expert-review">
      <ServiceHeader
        title={t('services.expert_review.title')}
        subtitle={t('services.expert_review.subtitle')}
        imageClassName="expert_review"
      />
    </div>
  );
};

export default ExpertReview;
