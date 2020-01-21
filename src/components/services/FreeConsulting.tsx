import React from 'react';
import { TFunction } from 'next-i18next';

import ServiceHeader from './ServiceHeader';
import FreeConsultingInsert from './FreeConsultingInsert/FreeConsultingInsert';
import FreeConsultingInsert2 from './FreeConsultingInsert/FreeConsultingInsert2';

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
      <FreeConsultingInsert
        num1={t('services.free_consulting_num.num1')}
        num2={t('services.free_consulting_num.num2')}
        num3={t('services.free_consulting_num.num3')}
        num4={t('services.free_consulting_num.num4')}
        num5={t('services.free_consulting_num.num5')}
        num6={t('services.free_consulting_num.num6')}
        li1={t('services.free_consulting_insert.li1')}
        li2={t('services.free_consulting_insert.li2')}
        li3={t('services.free_consulting_insert.li3')}
        li4={t('services.free_consulting_insert.li4')}
        li5={t('services.free_consulting_insert.li5')}
        li6={t('services.free_consulting_insert.li6')}
      />
      <FreeConsultingInsert2
        subtitle={t('services.free_consulting2.subtitle')}
      />
    </div>
  );
};

export default FreeConsulting;
