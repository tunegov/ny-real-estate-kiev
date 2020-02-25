import React, { useState } from 'react';
import { WithTranslation } from 'next-i18next';
import { withTranslation } from '@server/i18n';
import { PriceKind, PriceCurrency } from '@type/deals';
import Input from '@components/Input';

interface Props extends WithTranslation {
  value_from: number;
  value_to: number;
  onChange: any;
}

const PriceParam = ({ t, onChange, value_from, value_to }: Props) => {
  const [visible, setVisible] = useState(false);

  return (
    <>
      <div
        className={`type-param ${visible ? 'visible' : ''}`}
        onMouseEnter={() => setVisible(true)}
        onMouseLeave={() => setVisible(false)}>
        <div className="type-param-title">{t(`deals.params.area.title`)}</div>
      </div>
      {visible && (
        <div
          className="type-param-values area"
          onMouseEnter={() => setVisible(true)}
          onMouseLeave={() => setVisible(false)}>
          <div className="type-param-values-item">
            <Input
              placeholder={t(`deals.params.area.value_from`)}
              value={String(value_from)}
              min="0"
              onChange={e =>
                onChange('area_total[value_from]', Number(e.target.value))
              }
              type="number"
            />
            <div className="type-param-values-item-divider" />
            <Input
              placeholder={t(`deals.params.area.value_to`)}
              value={String(value_to)}
              min="0"
              onChange={e =>
                onChange('area_total[value_to]', Number(e.target.value))
              }
              type="number"
            />
          </div>
        </div>
      )}
    </>
  );
};

export default withTranslation('deals')(PriceParam);
