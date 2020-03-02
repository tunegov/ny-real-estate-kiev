import React from 'react';
import { TFunction } from 'next-i18next';

import ServiceHeader from './ServiceHeader';
import PropertyForSaleList from './PropertyForSaleInsert/PropertyForSaleList';
import PropertyForSaleInsert from './PropertyForSaleInsert/PropertyForSaleInsert';

interface Props {
  t: TFunction;
}

const LIST_ITEMS = [
  'services.property_for_sale_insert-list-white.li1',
  'services.property_for_sale_insert-list-white.li2',
  'services.property_for_sale_insert-list-white.li3',
  'services.property_for_sale_insert-list-white.li4',
  'services.property_for_sale_insert-list-white.li5',
  'services.property_for_sale_insert-list-white.li6',
  'services.property_for_sale_insert-list-white.li7'
];

const PropertyForSale = ({ t }: Props) => {
  return (
    <div className="property-for-sale">
      <ServiceHeader
        title={t('services.property_for_sale.title')}
        subtitle={t('services.property_for_sale.subtitle')}
        imageClassName="property_for_sale"
      />
      <PropertyForSaleInsert
        subtitle={t('services.property_for_sale_insert.subtitle')}
      />

      <PropertyForSaleList
        items={LIST_ITEMS}
        t={t}
        imageClassName="property_for_sale-insert-list-white"
      />
    </div>
  );
};

export default PropertyForSale;
