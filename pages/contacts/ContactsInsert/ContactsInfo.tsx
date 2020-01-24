import React, { useEffect, useState } from 'react';
import Plx from 'react-plx';

import '@styles/pages/contacts/ContactsInfo.scss';

interface Props {
  title?: string;
  mail?: string;
  phone?: string;
  location?: string;
}

const textParalax = [
  {
    start: 0,
    end: 500,
    properties: [
      {
        startValue: 50,
        endValue: 200,
        property: 'translateY'
      }
    ]
  }
];

const Contacts = (props: Props) => {
  return (
    <Plx parallaxData={textParalax}>
      <div className="contacts-info">
        <div className="contacts-info-text">
          <p className="contacts-info-text-title">{props.title}</p>

          <p className="contacts-info-text-li">{props.mail}</p>
          <p className="contacts-info-text-li">{props.phone}</p>
          <p className="contacts-info-text-li">{props.location}</p>
          <div className="contacts-info-block">
            <img
              className="contacts-info-block-img"
              src="/static/images/Contacts/email.png"
              alt=""
            />
            <img
              className="contacts-info-block-img"
              src="/static/images/Contacts/call.png"
              alt=""
            />
            <img
              className="contacts-info-block-img"
              src="/static/images/Contacts/location.png"
              alt=""
            />
          </div>
          <div className="contacts-info-footer">
            <img
              className="contacts-info-footer-img"
              src="/static/images/Contacts/telegram.png"
              alt=""
            />
            <img
              className="contacts-info-footer-img"
              src="/static/images/Contacts/instagram.png"
              alt=""
            />
            <img
              className="contacts-info-footer-img"
              src="/static/images/Contacts/facebook.png"
              alt=""
            />
          </div>
        </div>
      </div>
    </Plx>
  );
};

export default Contacts;
