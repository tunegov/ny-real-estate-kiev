import React, { useState } from 'react';
import { WithTranslation } from 'next-i18next';
import { withTranslation } from '@server/i18n';
import { PriceKind, PriceCurrency } from '@type/deals';
import Input from '@components/Input';

interface Props extends WithTranslation {
  value_from: number;
  value_to: number;
  currency_id: PriceCurrency;
  kind: PriceKind;
  onChange: any;
}

const CURRENCIES = [
  {
    value: 'UAH'
  },
  {
    value: 'EUR'
  },
  {
    value: 'USD'
  }
];

const KINDS = [
  {
    value: 'per_object'
  },
  {
    value: 'per_sqrmeter'
  }
];

const PriceParam = ({
  t,
  onChange,
  value_from,
  value_to,
  currency_id,
  kind
}: Props) => {
  const [visible, setVisible] = useState(false);

  return (
    <>
      <div
        className={`type-param ${visible ? 'visible' : ''}`}
        onMouseEnter={() => setVisible(true)}
        onMouseLeave={() => setVisible(false)}>
        <div className="type-param-title">{t(`deals.params.price.title`)}</div>
      </div>
      {visible && (
        <div
          className="type-param-values price"
          onMouseEnter={() => setVisible(true)}
          onMouseLeave={() => setVisible(false)}>
          <div className="type-param-values-item">
            <Input
              placeholder={t(`deals.params.price.value_from`)}
              value={String(value_from)}
              min="0"
              onChange={e =>
                onChange('price[value_from]', Number(e.target.value))
              }
              type="number"
            />
            <div className="type-param-values-item-divider" />
            <Input
              placeholder={t(`deals.params.price.value_to`)}
              value={String(value_to)}
              min="0"
              onChange={e =>
                onChange('price[value_to]', Number(e.target.value))
              }
              type="number"
            />
          </div>
          <div className="type-param-values-item">
            {CURRENCIES.map(({ value }) => (
              <div
                key={value}
                className={`type-param-values-item-select ${
                  currency_id === value ? 'active' : ''
                }`}
                onClick={() => onChange('price[currency_id]', value)}>
                {t(`deals.params.price.currency.${value}`)}
              </div>
            ))}
          </div>
          <div className="type-param-values-item">
            {KINDS.map(({ value }) => (
              <div
                key={value}
                className={`type-param-values-item-select ${
                  kind === value ? 'active' : ''
                }`}
                onClick={() => onChange('price[kind]', value)}>
                {t(`deals.params.price.kind.${value}`)}
              </div>
            ))}
          </div>
          <div className="type-param-values-item-inner"></div>
        </div>
      )}
    </>
  );
};

export default withTranslation('deals')(PriceParam);
