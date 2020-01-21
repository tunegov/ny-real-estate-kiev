import React, { useEffect, useState } from 'react';

import '@styles/pages/services/LegalSupportInsert/LegalSupportInsert.scss';

interface Props {
  subtitle?: string;
}

const LegalSupportInsert = (props: Props) => {
  return (
    <div className="legal-support-insert">
      <div className="legal-support-insert-text">
        <p className="legal-support-insert-subtitle">{props.subtitle}</p>
      </div>
    </div>
  );
};

export default LegalSupportInsert;
