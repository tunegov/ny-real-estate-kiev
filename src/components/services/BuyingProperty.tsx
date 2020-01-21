import React from 'react';
import { TFunction } from 'next-i18next';

import ServiceHeader from './ServiceHeader';
import BuyingPropertyInsert from './BuyingPropertyInsert/BuyingPropertyInsert';
import BuyingPropertyMap from './BuyingPropertyInsert/BuyingPropertyMap';
import BuyingPropertyList from './BuyingPropertyInsert/BuyingPropertyList';

interface Props {
  t: TFunction;
}

const LIST_ITEMS = [
  'services.buying_a_property_insert2.li1',
  'services.buying_a_property_insert2.li2',
  'services.buying_a_property_insert2.li3',
  'services.buying_a_property_insert2.li4',
  'services.buying_a_property_insert2.li5',
  'services.buying_a_property_insert2.li6',
  'services.buying_a_property_insert2.li7'
];

const BuyingProperty = ({ t }: Props) => {
  return (
    <div className="buying-a-property">
      <ServiceHeader
        title={t('services.buying_a_property.title')}
        subtitle={t('services.buying_a_property.subtitle')}
        imageClassName="buying_a_property"
      />
      <BuyingPropertyInsert
        subtitle={t('services.buying_a_property_info.subtitle')}
        imageClassName="buying_a_property_info_image"
      />
      <BuyingPropertyMap
        title={t('services.buying_a_property_map.title')}
        subtitle={t('services.buying_a_property_map.subtitle')}
        imageClassName="buying_a_property"
      />
      <BuyingPropertyList items={LIST_ITEMS} t={t} />
    </div>
  );
};

export default BuyingProperty;
