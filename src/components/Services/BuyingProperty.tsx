import React from 'react';
import { TFunction } from 'next-i18next';

import ServiceHeader from './ServiceHeader';

interface Props {
  t: TFunction;
}

const BuyingProperty = ({ t }: Props) => {
  return (
    <div className="buying-a-property">
      <ServiceHeader
        title={t('services.buying_a_property.title')}
        subtitle={t('services.buying_a_property.subtitle')}
        imageClassName="buying_a_property"
      />
    </div>
  );
};

export default BuyingProperty;
