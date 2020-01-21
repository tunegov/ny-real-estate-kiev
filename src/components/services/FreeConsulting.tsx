import React from 'react';
import { TFunction } from 'next-i18next';

import ServiceHeader from './ServiceHeader';
import FreeConsultingInsert from './FreeConsultingInsert/FreeConsultingInsert';
import FreeConsultingInsert2 from './FreeConsultingInsert/FreeConsultingInsert2';

interface Props {
  t: TFunction;
}

const LIST_ITEMS = [
  'services.free_consulting_insert.li1',
  'services.free_consulting_insert.li2',
  'services.free_consulting_insert.li3',
  'services.free_consulting_insert.li4',
  'services.free_consulting_insert.li5',
  'services.free_consulting_insert.li6'
];

const FreeConsulting = ({ t }: Props) => {
  return (
    <div className="free-consulting">
      <ServiceHeader
        title={t('services.free_consulting.title')}
        subtitle={t('services.free_consulting.subtitle')}
        imageClassName="free_consulting"
      />
      <FreeConsultingInsert items={LIST_ITEMS} t={t} />
      <FreeConsultingInsert2
        subtitle={t('services.free_consulting2.subtitle')}
      />
    </div>
  );
};

export default FreeConsulting;
