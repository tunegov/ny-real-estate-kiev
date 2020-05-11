import React, { useState, useEffect } from 'react';
import { WithTranslation } from 'next-i18next';
import { withTranslation } from '@server/i18n';

import { search, getDistricts, Data } from '@api/deals';

interface Props extends WithTranslation {
  currentValue: string[];
  field: string;
  onChange: any;
}

const DistrictParam = ({ t, currentValue, onChange, field }: Props) => {
  const [visible, setVisible] = useState(false);
  const [values, setValues] = useState<Data[]>([]);

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    const data = await getDistricts();
    setValues(data!);
  };

  return (
    <>
      <div
        className={`type-param ${visible ? 'visible' : ''}`}
        onMouseEnter={() => setVisible(true)}
        onMouseLeave={() => setVisible(false)}>
        <div className="type-param-title">
          {t(`deals.params.districts.title`)}
        </div>
      </div>
      {visible && (
        <div
          className="type-param-values column"
          onMouseEnter={() => setVisible(true)}
          onMouseLeave={() => setVisible(false)}>
          <div className="type-param-values-title">
            {t(`deals.params.districts.params_title`)}
          </div>
          {values?.map(({ value, id }) => {
            const selected = currentValue.includes(value);
            return (
              <div
                key={id}
                className={`type-param-values-item ${
                  selected ? 'selected' : ''
                }`}
                onClick={() => {
                  if (selected) {
                    const index = currentValue.indexOf(value);
                    currentValue.splice(index, 1);
                    onChange(field, currentValue);
                  } else {
                    onChange(field, [...currentValue, value]);
                  }
                }}>
                <input
                  type="checkbox"
                  checked={selected}
                  onChange={() => null}
                />

                {value}
              </div>
            );
          })}
        </div>
      )}
    </>
  );
};

export default withTranslation('deals')(DistrictParam);
