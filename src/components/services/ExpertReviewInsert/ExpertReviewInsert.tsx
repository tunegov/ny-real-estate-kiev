import React, { useEffect, useState } from 'react';

import '@styles/pages/services/ExpertReviewInsert/ExpertReviewInsert.scss';

interface Props {
  subtitle?: string;
  line?: string;
}

const ExpertReviewInsert = (props: Props) => {
  return (
    <div className="expert-review-insert">
      <div className="expert-review-insert-line">{props.line}</div>
      <div className="expert-review-insert-text">
        <p className="expert-review-insert-subtitle">{props.subtitle}</p>
      </div>
    </div>
  );
};

export default ExpertReviewInsert;
