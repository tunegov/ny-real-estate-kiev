import React, { useState } from 'react';
import { WithTranslation } from 'next-i18next';
import { withTranslation } from '@server/i18n';

interface Props extends WithTranslation {
  currentValue: string[];
  field: string;
  onChange: any;
}

const VALUES = [
  {
    value: 'econom'
  },
  {
    value: 'business'
  },
  {
    value: 'elit'
  }
];

const ClassParam = ({ t, currentValue, onChange, field }: Props) => {
  const [visible, setVisible] = useState(false);

  return (
    <>
      <div
        className={`type-param ${visible ? 'visible' : ''}`}
        onMouseEnter={() => setVisible(true)}
        onMouseLeave={() => setVisible(false)}>
        <div className="type-param-title">{t(`deals.params.class.title`)}</div>
      </div>
      {visible && (
        <div
          className="type-param-values"
          onMouseEnter={() => setVisible(true)}
          onMouseLeave={() => setVisible(false)}>
          {VALUES.map(({ value }, index) => {
            const selected = currentValue!.includes(value);
            return (
              <div
                key={index}
                className={`type-param-values-item ${
                  currentValue.includes(value) ? 'selected' : ''
                }`}
                onClick={() => {
                  if (selected) {
                    const index = currentValue.indexOf(value);
                    currentValue.splice(index, 1);
                    onChange(field, currentValue);
                  } else {
                    onChange(field, [value]);
                  }
                }}>
                {t(`deals.params.class.${value}`)}
              </div>
            );
          })}
        </div>
      )}
    </>
  );
};

export default withTranslation('deals')(ClassParam);
