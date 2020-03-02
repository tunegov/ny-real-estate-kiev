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
        <div className="contacts-info-block">
          <a
            className="text-icon"
            target="_blank"
            href="mailto:an.newyork.kiev@gmail.com">
            <img
              className="contacts-info-img"
              src="/static/images/Contacts/email.png"
              alt=""
            />
            <p className="contacts-info-text-li">{props.mail}</p>
          </a>
          <a className="text-icon" href="tel:+380 67 994 3848">
            <img
              className="contacts-info-img"
              src="/static/images/Contacts/call.png"
              alt=""
            />
            <p className="contacts-info-text-li">{props.phone}</p>
          </a>
          <a
            className="text-icon"
            target="_blank"
            href="https://maps.google.com/?q=г. Киев, улица О.Гончара 47Б">
            <img
              className="contacts-info-img"
              src="/static/images/Contacts/location.png"
              alt=""
            />
            <p className="contacts-info-text-li">{props.location}</p>
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
