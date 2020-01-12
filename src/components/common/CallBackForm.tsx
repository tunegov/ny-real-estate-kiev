import React, { useState } from 'react';
import { TFunction } from 'next-i18next';
import { withTranslation } from '@server/i18n';

import Button from '@components/Button';
import Input from '@components/Input';

import '@styles/components/common/CallBackForm.scss';

interface Props {
  t: TFunction;
}

const CallBackForm = ({ t }: Props) => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);
  const movementStrength = 35;

  const onMouseMove = (e: any) => {
    const height = movementStrength / window.innerHeight;
    const width = movementStrength / window.innerWidth;
    const pageX = e.pageX - window.innerWidth / 2;
    const pageY = e.pageY - window.innerHeight / 2;
    const newvalueX = width * pageX * -1 - 25;
    const newvalueY = height * pageY * -1 + 10;

    requestAnimationFrame(() => {
      setX(newvalueX);
      setY(newvalueY);
    });
  };

  const onSend = () => {};

  return (
    <div className="call-back-form" onMouseMove={onMouseMove}>
      <div className="call-back-form-left">
        <div
          className="call-back-form-left-image"
          style={{ backgroundPosition: `${x}px ${y}px` }}
        />
      </div>
      <div className="call-back-form-right">
        <p className="call-back-form-text">
          {t('services.common.call_back.text')}
        </p>
        <Input
          value={name}
          onChange={e => setName(e.target.value)}
          placeholder={t('services.common.call_back.name')}
        />
        <Input
          value={phone}
          onChange={e => setPhone(e.target.value)}
          placeholder={t('services.common.call_back.phone')}
        />
        <Button title={t('services.common.call_back.send')} onClick={onSend} />
      </div>
    </div>
  );
};

export default withTranslation('services')(CallBackForm);
