import React, { useEffect, useState } from 'react';
import Plx from 'react-plx';
import { GOOGLE_MAPS_KEY } from '@constants/index';
import GoogleMapReact from 'google-map-react';

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
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    setIsMobile(window.innerWidth <= 1024);
  });

  return (
    <Plx
      className="contacts-location"
      parallaxData={textParalax}
      disabled={isMobile}>
      <div className="contacts-location-text">
        <p className="contacts-location-text-title">{props.title}</p>
        <div className="contacts-location-line" />
        <a
          target="_blank"
          href="https://maps.google.com/?q=г. Киев, м. Золотые Ворота">
          <p className="contacts-location-text-location">{props.location1}</p>
        </a>
        <a
          target="_blank"
          href="https://maps.google.com/?q=г. Киев, м. Университет">
          <p className="contacts-location-text-location">{props.location2}</p>
        </a>
        <a
          target="_blank"
          href="https://maps.google.com/?q=г. Киев, ТРЦ Украина">
          <p className="contacts-location-text-location">{props.location3}</p>
        </a>
      </div>
    </Plx>
  );
};

export default Contacts;
