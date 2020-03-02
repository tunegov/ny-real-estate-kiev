import React, { MouseEventHandler } from 'react';

import '@styles/components/Button.scss';

interface Props {
  title: string;
  onClick: MouseEventHandler;
  className?: string;
  disabled?: boolean;
}

const Button = (props: Props) => {
  return (
    <button
      onClick={props.onClick}
      className={`button ${props.className} ${
        props.disabled ? 'disabled' : ''
      }`}>
      <p>{props.title}</p>
    </button>
  );
};

export default Button;
