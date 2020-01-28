import React, { useState } from 'react';
import { WithTranslation } from 'next-i18next';
import { withTranslation } from '@server/i18n';

import { sendMessageToEmail } from '@api/user';
import Button from '@components/Button';
import Input from '@components/Input';
import { show } from '@utils/notification';

import { NumberMask, NumberRegex, EmailRegex } from '@constants/index';

import '@styles/pages/contacts/ContactsForm.scss';

const MESSAGE_TITLE = ' Остались вопросы';

interface Props extends WithTranslation {
  title?: string;
}

const ContactsForm = ({ t, title }: Props) => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [valid, setValid] = useState(false);

  const onSend = async () => {
    if (!valid) {
      return;
    }
    const messageText = `
        Имя - ${name}<br/>
        Телефон - ${phone}<br/>
        E-mail - ${email}
    `;

    await sendMessageToEmail(MESSAGE_TITLE, messageText);

    setName('');
    setPhone('');
    setEmail('');
    show(
      t('contacts-form.alert.title', { name }),
      t('contacts-form.alert.message')
    );
  };

  const checkValid = (
    nameLocal: string,
    phoneLocal: string,
    emailLocal: string
  ) => {
    setValid(
      nameLocal.length >= 2 &&
        NumberRegex.test(phoneLocal) &&
        EmailRegex.test(emailLocal)
    );
  };

  return (
    <div className="contacts-form">
      <div className="contacts-form-title">{t('contacts-form.title')}</div>
      <div className="contacts-form-inputs">
        <Input
          value={name}
          onChange={e => {
            setName(e.target.value);
            checkValid(e.target.value, phone, email);
          }}
          placeholder={t('contacts-form.name')}
        />
        <Input
          mask={NumberMask}
          value={phone}
          onChange={e => {
            setPhone(e.target.value);
            checkValid(name, e.target.value, email);
          }}
          placeholder={t('contacts-form.phone')}
        />
        <Input
          value={email}
          onChange={e => {
            setEmail(e.target.value);
            checkValid(name, phone, e.target.value);
          }}
          placeholder={t('contacts-form.email')}
        />
        <Button
          disabled={!valid}
          title={t('contacts-form.send')}
          onClick={onSend}
        />
      </div>
    </div>
  );
};

export default withTranslation('contacts')(ContactsForm);
