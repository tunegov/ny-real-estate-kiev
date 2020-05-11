import React from 'react';
import { motion } from 'framer-motion';

import '@styles/pages/contacts/ContactsInfo.scss';
import {
  facebookLink,
  telegramLink,
  instagramLink,
} from '@constants/constants';

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

const easing = [0.6, -0.05, 0.01, 0.99];

const fadeInBlock = {
  initial: {
    y: 50,
    opacity: 0,
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.6, ease: easing },
  },
};

interface Props {
  title?: string;
  mail?: string;
  phone?: string;
  location?: string;
}

const Contacts = (props: Props) => {
  return (
    <motion.div variants={fadeInBlock} className="contacts-info">
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
    </motion.div>
  );
};

export default Contacts;
