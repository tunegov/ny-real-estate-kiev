import React from 'react';
import { TFunction } from 'next-i18next';

import ServiceHeader from './ServiceHeader';

interface Props {
  t: TFunction;
}

const PropertyForSale = ({ t }: Props) => {
  return (
    <div className="property-for-sale">
      <ServiceHeader
        title={t('services.property_for_sale.title')}
        subtitle={t('services.property_for_sale.subtitle')}
        imageClassName="property_for_sale"
      />
    </div>
  );
};

export default PropertyForSale;
