import React from 'react';
import { TFunction } from 'next-i18next';

import ServiceHeader from './ServiceHeader';
import BuyingPropertyInsert from './BuyingPropertyInsert/BuyingPropertyInsert';
import BuyingPropertyMap from './BuyingPropertyInsert/BuyingPropertyMap';
import BuyingPropertyList from './BuyingPropertyInsert/BuyingPropertyList';

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
      <BuyingPropertyInsert
        line
        subtitle={t('services.buying_a_property_info.subtitle')}
        imageClassName="buying_a_property_info_image"
      />
      <BuyingPropertyMap
        title={t('services.buying_a_property_map.title')}
        subtitle={t('services.buying_a_property_map.subtitle')}
        imageClassName="buying_a_property"
      />
      <BuyingPropertyList
        li1={t('services.buying_a_property_insert2.li1')}
        li2={t('services.buying_a_property_insert2.li2')}
        li3={t('services.buying_a_property_insert2.li3')}
        li4={t('services.buying_a_property_insert2.li4')}
        li5={t('services.buying_a_property_insert2.li5')}
        li6={t('services.buying_a_property_insert2.li6')}
        li7={t('services.buying_a_property_insert2.li7')}
      />
    </div>
  );
};

export default BuyingProperty;
