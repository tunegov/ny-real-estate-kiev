import React, { useState } from 'react';
import { TFunction } from 'next-i18next';

import { withTranslation } from '@server/i18n';
import { sendMessageToEmail } from '@api/user';
import Button from '@components/Button';
import Input from '@components/Input';
import { show } from '@utils/notification';
import { EmailRegex } from '@constants/index';

import '@styles/components/Footer.scss';
import {
  facebookLink,
  telegramLink,
  instagramLink,
} from '@constants/constants';

type Link = {
  url: string;
  key: string;
};

const LINKS_1: Link[] = [
  {
    url: '',
    key: 'footer.links.flat',
  },
  {
    url: '',
    key: 'footer.links.selling',
  },
  {
    url: '',
    key: 'footer.links.rent',
  },
  {
    url: '',
    key: 'footer.links.property',
  },
  {
    url: '',
    key: 'footer.links.new_building',
  },
  {
    url: '',
    key: 'footer.links.buy',
  },
];

const LINKS_2: Link[] = [
  {
    url: '',
    key: 'footer.links.flat',
  },
  {
    url: '',
    key: 'footer.links.selling',
  },
  {
    url: '',
    key: 'footer.links.rent',
  },
  {
    url: '',
    key: 'footer.links.property',
  },
  {
    url: '',
    key: 'footer.links.new_building',
  },
  {
    url: '',
    key: 'footer.links.buy',
  },
];

const LINKS_3: Link[] = [
  {
    url: '',
    key: 'footer.links.flat',
  },
  {
    url: '',
    key: 'footer.links.selling',
  },
  {
    url: '',
    key: 'footer.links.rent',
  },
  {
    url: '',
    key: 'footer.links.property',
  },
  {
    url: '',
    key: 'footer.links.new_building',
  },
  {
    url: '',
    key: 'footer.links.buy',
  },
];

const SOCIAL_LINKS = [
  {
    className: 'social-link telegram',
    href: telegramLink,
  },
  {
    className: 'social-link facebook',
    href: facebookLink,
  },
  {
    className: 'social-link instagram',
    href: instagramLink,
  },
];

interface Props {
  t: TFunction;
}

const Footer = ({ t }: Props) => {
  const [email, setEmail] = useState('');
  const [valid, setValid] = useState(false);

  const onSubscribe = async () => {
    const messageText = `
Новая подписка\n
E-mail - ${email}
    `;
    await sendMessageToEmail(messageText);
    setEmail('');

    show(t('footer.alert.title'), t('footer.alert.message'));
  };

  const checkValid = (emailLocal: string) => {
    setValid(EmailRegex.test(emailLocal));
  };

  const renderLinks = () => {
    return (
      <div className="footer-links">
        {/* <div className="footer-links-inner">
          <div className="footer-links-col">
            {LINKS_1.map(link => (
              <p key={link.key} className="footer-link">
                {t(link.key)}
              </p>
            ))}
          </div>
          <div className="footer-links-col">
            {LINKS_2.map(link => (
              <p key={link.key} className="footer-link">
                {t(link.key)}
              </p>
            ))}
          </div>
          <div className="footer-links-col">
            {LINKS_3.map(link => (
              <p key={link.key} className="footer-link">
                {t(link.key)}
              </p>
            ))}
          </div>
        </div> */}
        <div className="footer-social">
          {SOCIAL_LINKS.map((link, index) => (
            <a
              key={index}
              target="_blank"
              rel="noopener noreferrer"
              href={link.href}
              className={link.className}></a>
          ))}
        </div>
      </div>
    );
  };
  const renderSubscripe = () => {
    return (
      <div className="footer-subscribe">
        <p className="footer-subscribe-text">{t('footer.subscribe.text')}</p>
        <Input
          placeholder={t('footer.subscribe.input')}
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
            checkValid(e.target.value);
          }}
          onKeyPress={(e) => {
            if (e.key === 'Enter') {
              onSubscribe();
            }
          }}
        />
        <Button
          onClick={onSubscribe}
          disabled={!valid}
          title={t('footer.subscribe.button')}
        />
        {renderLinks()}
      </div>
    );
  };

  return (
    <footer className="footer">
      <div className="footer-content">{renderSubscripe()}</div>
      <div className="footer-image" />
    </footer>
  );
};

export default withTranslation(['footer', 'services'])(Footer);
