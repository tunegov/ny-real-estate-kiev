import React, { useState } from 'react';
import { WithTranslation } from 'next-i18next';
import { withTranslation } from '@server/i18n';

import { sendMessageToEmail } from '@api/user';
import Button from '@components/Button';
import Input from '@components/Input';
import { show } from '@utils/notification';

import { NumberMask, NumberRegex } from '@constants/index';

import '@styles/components/common/CallBackForm.scss';

const MESSAGE_TITLE = 'Перезвонить клиенту';

interface Props extends WithTranslation {}

const CallBackForm = ({ t }: Props) => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [valid, setValid] = useState(false);

  const onSend = async () => {
    if (!valid) {
      return;
    }
    const messageText = `
        Имя - ${name}<br/>
        Телефон - ${phone}
    `;
    await sendMessageToEmail(MESSAGE_TITLE, messageText);
    setName('');
    setPhone('');
    show(
      t('services.common.call_back.alert.title', { name }),
      t('services.common.call_back.alert.message')
    );
  };

  const checkValid = (nameLocal: string, phoneLocal: string) => {
    setValid(nameLocal.length >= 2 && NumberRegex.test(phoneLocal));
  };

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
          onChange={e => {
            setName(e.target.value);
            checkValid(e.target.value, phone);
          }}
          placeholder={t('services.common.call_back.name')}
        />
        <Input
          mask={NumberMask}
          value={phone}
          onChange={e => {
            setPhone(e.target.value);
            checkValid(name, e.target.value);
          }}
          placeholder={t('services.common.call_back.phone')}
        />
        <Button
          disabled={!valid}
          title={t('services.common.call_back.send')}
          onClick={onSend}
        />
      </div>
    </div>
  );
};

export default withTranslation('services')(CallBackForm);
