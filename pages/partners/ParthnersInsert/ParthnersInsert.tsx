import React, { useEffect, useState } from 'react';

import '@styles/pages/parthners/ParthnersInsert.scss';

interface Props {
  title?: string;
  subtitle?: string;
}

const ParthnersInsert = (props: Props) => {
  return (
    <div className="parthners-insert">
      <div className="parthners-insert-text">
        <p className="parthners-insert-text-title">{props.title}</p>
        <div className="parthners-insert-line" />
        <p className="parthners-insert-text-subtitle">{props.subtitle}</p>
      </div>
    </div>
  );
};

export default ParthnersInsert;
