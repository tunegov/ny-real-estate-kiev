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
    <Plx parallaxData={textParalax} disabled={isMobile}>
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
        <GoogleMapReact
          bootstrapURLKeys={{ key: GOOGLE_MAPS_KEY }}
          defaultCenter={{
            lat: 59.95,
            lng: 30.33
          }}
          defaultZoom={11}
          yesIWantToUseGoogleMapApiInternals
          onGoogleApiLoaded={({ map, maps }) =>
            console.log(map, maps)
          }></GoogleMapReact>
      </div>
    </Plx>
  );
};

export default Contacts;
