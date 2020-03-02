import React from 'react';
import MaskedInput, { maskArray } from 'react-text-mask';

import '@styles/components/Input.scss';

interface Props {
  value: string;
  placeholder?: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  className?: string;
  type?: string;
  min?: string;
  max?: string;
  disabled?: boolean;
  mask?: maskArray;
}

const Input = (props: Props) => {
  if (props.mask) {
    return (
      <MaskedInput
        mask={props.mask}
        guide={true}
        value={props.value}
        type={props.type}
        onChange={props.onChange}
        placeholder={props.placeholder}
        className={`input ${props.className} ${
          props.disabled ? 'disabled' : ''
        }`}
      />
    );
  }
  return (
    <input
      value={props.value}
      type={props.type}
      onChange={props.onChange}
      placeholder={props.placeholder}
      className={`input ${props.className} ${props.disabled ? 'disabled' : ''}`}
      {...props}
    />
  );
};

export default Input;
