import React from 'react';
import { TFunction } from 'next-i18next';

import ServiceHeader from './ServiceHeader';

interface Props {
  t: TFunction;
}

const FreeConsulting = ({ t }: Props) => {
  return (
    <div className="free-consulting">
      <ServiceHeader
        title={t('services.free_consulting.title')}
        subtitle={t('services.free_consulting.subtitle')}
        imageClassName="free_consulting"
      />
    </div>
  );
};

export default FreeConsulting;
