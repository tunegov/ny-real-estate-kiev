import React from 'react';
import { TFunction } from 'next-i18next';

import ServiceHeader from './ServiceHeader';

interface Props {
  t: TFunction;
}

const LegalSupport = ({ t }: Props) => {
  return (
    <div className="legal-support">
      <ServiceHeader
        title={t('services.legal_support.title')}
        imageClassName="legal_support"
      />
    </div>
  );
};

export default LegalSupport;
