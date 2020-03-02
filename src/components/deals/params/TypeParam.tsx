import React, { useState } from 'react';
import { WithTranslation } from 'next-i18next';
import { withTranslation } from '@server/i18n';

interface Props extends WithTranslation {
  currentValue: string;
  field: string;
  onChange: any;
}

const VALUES = [
  {
    value: 'rent_long'
  },
  {
    value: 'sell'
  }
];

const TypeParam = ({ t, currentValue, onChange, field }: Props) => {
  const [visible, setVisible] = useState(false);

  return (
    <>
      <div
        className={`type-param ${visible ? 'visible' : ''}`}
        onMouseEnter={() => setVisible(true)}
        onMouseLeave={() => setVisible(false)}>
        <div className="type-param-title">
          {t(`deals.params.type.${currentValue}`)}
        </div>
      </div>
      {visible && (
        <div
          className="type-param-values"
          onMouseEnter={() => setVisible(true)}
          onMouseLeave={() => setVisible(false)}>
          {VALUES.map(({ value }, index) => (
            <div
              key={index}
              className={`type-param-values-item ${
                value === currentValue ? 'selected' : ''
              }`}
              onClick={() => onChange(field, value)}>
              {t(`deals.params.type.${value}`)}
            </div>
          ))}
        </div>
      )}
    </>
  );
};

export default withTranslation('deals')(TypeParam);
