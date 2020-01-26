import React, { useState } from 'react';
import { WithTranslation } from 'next-i18next';
import { withTranslation } from '@server/i18n';

import Button from '@components/Button';
import Input from '@components/Input';

import '@styles/pages/contacts/ContactsForm.scss';

interface Props extends WithTranslation {
  title?: string;
}

const ContactsForm = ({ t, title }: Props) => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');

  const onSend = () => {};

  return (
    <div className="contacts-form">
      <div className="contacts-form-title">{t('contacts-form.title')}</div>
      <div className="contacts-form-inputs">
        <Input
          value={name}
          onChange={e => setName(e.target.value)}
          placeholder={t('contacts-form.name')}
        />
        <Input
          value={phone}
          onChange={e => setPhone(e.target.value)}
          placeholder={t('contacts-form.phone')}
        />
        <Input
          value={email}
          onChange={e => setEmail(e.target.value)}
          placeholder={t('contacts-form.email')}
        />
        <Button title={t('contacts-form.send')} onClick={onSend} />
      </div>
    </div>
  );
};

export default withTranslation('contacts')(ContactsForm);
