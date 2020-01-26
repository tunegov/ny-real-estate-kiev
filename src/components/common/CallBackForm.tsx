import React, { useState } from 'react';
import { WithTranslation } from 'next-i18next';
import { withTranslation } from '@server/i18n';

import Button from '@components/Button';
import Input from '@components/Input';

import '@styles/components/common/CallBackForm.scss';

interface Props extends WithTranslation {}

const CallBackForm = ({ t }: Props) => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');

  const onSend = () => {};

  return (
    <div className="call-back-form">
      <div className="call-back-form-left">
        <div className="call-back-form-left-image" />
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
