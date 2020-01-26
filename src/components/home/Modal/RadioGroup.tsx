import React from 'react';

import '@styles/components/home/RadioGroup.scss';

type RadioGroupItem = {
  title: string;
  key: string;
};

interface Props {
  items: RadioGroupItem[];
  selected: string;
  onChnaged: any;
}

const RadioGroup = ({ items, onChnaged, selected }: Props) => {
  return (
    <div className="radio-group">
      {items.map(item => (
        <div
          key={item.key}
          className="radio-group-item"
          onClick={() => onChnaged(item.key)}>
          <div
            className={`radio-group-item-check ${
              item.key === selected ? 'checked' : ''
            }`}
          />
          {item.title}
        </div>
      ))}
    </div>
  );
};

export default RadioGroup;
