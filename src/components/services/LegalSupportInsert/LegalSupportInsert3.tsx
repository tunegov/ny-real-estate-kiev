import React, { useEffect, useState } from 'react';

import '@styles/pages/services/LegalSupportInsert/LegalSupportInsert3.scss';

interface Props {
  subtitle?: string;
  line?: string;
}

const LegalSupportInsert3 = (props: Props) => {
  return (
    <div className="legal-support-insert3">
      <div className="legal-support-insert3-line">{props.line}</div>
      <div className="legal-support-insert3-text">
        <p className="legal-support-insert3-subtitle">{props.subtitle}</p>
      </div>
    </div>
  );
};

export default LegalSupportInsert3;
