import React from 'react';

import '@styles/components/Input.scss';

interface Props {
  value: string;
  placeholder?: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  className?: string;
  disabled?: boolean;
}

const Input = (props: Props) => {
  return (
    <input
      value={props.value}
      onChange={props.onChange}
      placeholder={props.placeholder}
      className={`input ${props.className} ${props.disabled ? 'disabled' : ''}`}
    />
  );
};

export default Input;
