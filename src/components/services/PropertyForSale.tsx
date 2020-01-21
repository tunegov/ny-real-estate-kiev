import React from 'react';
import { TFunction } from 'next-i18next';

import ServiceHeader from './ServiceHeader';
import PropertyForSaleList from './PropertyForSaleInsert/PropertyForSaleList';
import PropertyForSaleInsert from './PropertyForSaleInsert/PropertyForSaleInsert';

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
      <PropertyForSaleInsert
        subtitle={t('services.property_for_sale_insert.subtitle')}
      />

      <PropertyForSaleList
        li1={t('services.property_for_sale_insert-list-white.li1')}
        li2={t('services.property_for_sale_insert-list-white.li2')}
        li3={t('services.property_for_sale_insert-list-white.li3')}
        li4={t('services.property_for_sale_insert-list-white.li4')}
        li5={t('services.property_for_sale_insert-list-white.li5')}
        li6={t('services.property_for_sale_insert-list-white.li6')}
        li7={t('services.property_for_sale_insert-list-white.li7')}
        imageClassName="property_for_sale-insert-list-white"
      />
    </div>
  );
};

export default PropertyForSale;
