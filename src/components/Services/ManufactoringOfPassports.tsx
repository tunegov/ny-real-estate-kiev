import React from 'react';
import { TFunction } from 'next-i18next';

import ServiceHeader from './ServiceHeader';

interface Props {
  t: TFunction;
}

const ManufactoringOfPassports = ({ t }: Props) => {
  return (
    <div className="manufactoring_of_passports">
      <ServiceHeader
        title={t('services.manufactoring_of_passports.title')}
        subtitle={t('services.manufactoring_of_passports.subtitle')}
        imageClassName="manufactoring_of_passports"
      />
    </div>
  );
};

export default ManufactoringOfPassports;
