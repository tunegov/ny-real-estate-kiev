import React from 'react';

import '@styles/pages/contacts/ContactsInfo.scss';
import {
  facebookLink,
  telegramLink,
  instagramLink
} from '@constants/constants';

const SOCIAL_LINKS = [
  {
    className: 'social-link telegram',
    href: telegramLink
  },
  {
    className: 'social-link facebook',
    href: facebookLink
  },
  {
    className: 'social-link instagram',
    href: instagramLink
  }
];

interface Props {
  title?: string;
  mail?: string;
  phone?: string;
  location?: string;
}

const Contacts = (props: Props) => {
  return (
    <div className="contacts-info">
      <div className="contacts-info-text">
        <p className="contacts-info-text-title">{props.title}</p>
        <a href="mailto:an.newyork.kiev@gmail.com">
          <p className="contacts-info-text-li">{props.mail}</p>
        </a>
        <a href="tel:+380 67 994 3848">
          <p className="contacts-info-text-li">{props.phone}</p>
        </a>
        <a href="https://maps.google.com/?q=г. Киев, улица О.Гончара 47Б, 3 этаж, офис 6">
          <p className="contacts-info-text-li">{props.location}</p>
        </a>
        <div className="contacts-info-block">
          <a href="mailto:an.newyork.kiev@gmail.com">
            <img
              className="contacts-info-block-img"
              src="/static/images/Contacts/email.png"
              alt=""
            />
          </a>
          <a href="tel:+380 67 994 3848">
            <img
              className="contacts-info-block-img"
              src="/static/images/Contacts/call.png"
              alt=""
            />
          </a>
          <a href="https://maps.google.com/?q=г. Киев, улица О.Гончара 47Б, 3 этаж, офис 6">
            <img
              className="contacts-info-block-img"
              src="/static/images/Contacts/location.png"
              alt=""
            />
          </a>
        </div>
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
    </div>
  );
};

export default Contacts;
