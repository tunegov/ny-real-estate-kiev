import React from 'react';

import '@styles/components/home/Stepper.scss';

interface Props {
  step: number;
  total: number;
}

const Stepper = ({ step, total }: Props) => {
  return (
    <div className="stepper">
      <div className="stepper-line" />
      <div className="stepper-content">
        {Array.from({ length: total }).map((_, i) => (
          <div
            key={i}
            className={`stepper-content-item ${step === i ? 'active' : ''} ${
              step > i ? 'done' : ''
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default Stepper;
