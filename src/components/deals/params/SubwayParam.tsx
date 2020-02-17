import React, { useState, useEffect } from 'react';
import { WithTranslation } from 'next-i18next';
import { withTranslation } from '@server/i18n';

import { search, getSubway, DataWithItems, Data } from '@api/deals';

interface Props extends WithTranslation {
  currentValue: string[];
  field: string;
  onChange: any;
}

const SubwayParam = ({ t, currentValue, onChange, field }: Props) => {
  const [visible, setVisible] = useState(false);
  const [values, setValues] = useState<DataWithItems[]>([]);

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    const data = await getSubway();
    setValues(data!);
  };

  const getSubwayLineType = (subway: string) => {
    switch (subway) {
      case 'Куренівсько-Червоноармійська лінія':
        return 'blue';
      case 'Святошинсько-Броварська лінія':
        return 'red';
      case 'Сирецько-Печерська лінія':
        return 'green';
      default:
        return '';
    }
  };

  return (
    <>
      <div
        className={`type-param ${visible ? 'visible' : ''}`}
        onMouseEnter={() => setVisible(true)}
        onMouseLeave={() => setVisible(false)}>
        <div className="type-param-title">
          {t(`deals.params.subways.title`)}
        </div>
      </div>
      {visible && (
        <div
          className="type-param-values"
          onMouseEnter={() => setVisible(true)}
          onMouseLeave={() => setVisible(false)}>
          {values.map(val => (
            <SubwayLine
              key={val.value}
              type={getSubwayLineType(val.value)}
              items={val.items}
              currentValue={currentValue}
              onChange={onChange}
              field={field}
            />
          ))}
        </div>
      )}
    </>
  );
};

interface SubwayLineProps {
  items: Data[];
  currentValue: string[];
  field: string;
  type: string;
  onChange: any;
}

const SubwayLine = ({
  items,
  currentValue,
  onChange,
  field,
  type
}: SubwayLineProps) => {
  return (
    <div className={`type-param-values-block ${type}`}>
      <div className={`type-param-values-block-circle ${type}`} />
      {items.map(({ value, id }) => {
        const selected = currentValue.includes(value);
        return (
          <div
            key={id}
            className={`type-param-values-item ${selected ? 'selected' : ''}`}
            onClick={() => {
              if (selected) {
                const index = currentValue.indexOf(value);
                currentValue.splice(index, 1);
                onChange(field, currentValue);
              } else {
                onChange(field, [...currentValue, value]);
              }
            }}>
            {value}
          </div>
        );
      })}
    </div>
  );
};

export default withTranslation('deals')(SubwayParam);
