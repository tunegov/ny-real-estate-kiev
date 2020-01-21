import React, { useEffect, useState } from 'react';

import '@styles/pages/services/ExpertReviewInsert/ExpertReviewInsert2.scss';

interface Props {
  li1?: string;
  li2?: string;
  li3?: string;
  li4?: string;
  imageClassName: string;
}

const ExpertReviewInsert2 = (props: Props) => {
  return (
    <div className="expert-review-insert2">
      <div className="expert-review-insert2-text">
        <p className="expert-review-insert2-li">{props.li1}</p>
        <p className="expert-review-insert2-li">{props.li2}</p>
        <p className="expert-review-insert2-li">{props.li3}</p>
      </div>
      <div className={`expert-review-insert2-image ${props.imageClassName}`} />
    </div>
  );
};

export default ExpertReviewInsert2;
