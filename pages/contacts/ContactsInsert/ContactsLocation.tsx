import React, { useEffect, useState } from 'react';
import Plx from 'react-plx';

import '@styles/pages/contacts/ContactsLocation.scss';

interface Props {
  title?: string;
  location1?: string;
  location2?: string;
  location3?: string;
}

const textParalax = [
  {
    start: 0,
    end: 300,
    properties: [
      {
        startValue: 100,
        endValue: 0,
        property: 'translateY'
      }
    ]
  }
];

const Contacts = (props: Props) => {
  return (
    <Plx parallaxData={textParalax}>
      <div className="contacts-location">
        <div className="contacts-location-text">
          <p className="contacts-location-text-title">{props.title}</p>
          <div className="contacts-location-line" />
          <a href="https://maps.google.com/?q=г. Киев, м. Золотые Ворота">
            <p className="contacts-location-text-location">{props.location1}</p>
          </a>
          <a href="https://maps.google.com/?q=г. Киев, м. Университет">
            <p className="contacts-location-text-location">{props.location2}</p>
          </a>
          <a href="https://maps.google.com/?q=г. Киев, ТРЦ Украина">
            <p className="contacts-location-text-location">{props.location3}</p>
          </a>
        </div>
      </div>
    </Plx>
  );
};

export default Contacts;
