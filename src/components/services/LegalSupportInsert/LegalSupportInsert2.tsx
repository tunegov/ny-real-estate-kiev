import React, { useEffect, useState } from 'react';

import '@styles/pages/services/LegalSupportInsert/LegalSupportInsert2.scss';

interface Props {
  subtitle?: string;
  imageClassName: string;
}

const LegalSupportInsert2 = (props: Props) => {
  return (
    <div className="legal-support-insert2">
      <div className="legal-support-insert2-text">
        <p className="legal-support-insert2-subtitle">{props.subtitle}</p>
      </div>
      <div className={`legal-support-insert2-image ${props.imageClassName}`} />
    </div>
  );
};

export default LegalSupportInsert2;
