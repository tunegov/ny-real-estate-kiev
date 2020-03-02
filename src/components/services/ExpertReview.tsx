import React from 'react';
import { TFunction } from 'next-i18next';

import ServiceHeader from './ServiceHeader';
import ExpertReviewInsert from './ExpertReviewInsert/ExpertReviewInsert';
import ExpertReviewInsert2 from './ExpertReviewInsert/ExpertReviewInsert2';

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
      <ExpertReviewInsert
        line=""
        subtitle={t('services.expert_review_insert.subtitle')}
      />
      <ExpertReviewInsert2
        li1={t('services.expert_review_insert2.li1')}
        li2={t('services.expert_review_insert2.li2')}
        li3={t('services.expert_review_insert2.li3')}
        imageClassName="expert_review"
      />
    </div>
  );
};

export default ExpertReview;
