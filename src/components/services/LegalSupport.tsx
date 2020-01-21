import React from 'react';
import { TFunction } from 'next-i18next';

import ServiceHeader from './ServiceHeader';
import LegalSupportInsert from './LegalSupportInsert/LegalSupportInsert';
import LegalSupportInsert2 from './LegalSupportInsert/LegalSupportInsert2';
import LegalSupportInsert3 from './LegalSupportInsert/LegalSupportInsert3';

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
      <LegalSupportInsert
        subtitle={t('services.legal_support_insert.subtitle')}
      />
      <LegalSupportInsert2
        subtitle={t('services.legal_support_insert2.subtitle')}
        imageClassName="legal_support_insert2_image"
      />
      <LegalSupportInsert3
        line=""
        subtitle={t('services.legal_support_insert3.subtitle')}
      />
    </div>
  );
};

export default LegalSupport;
