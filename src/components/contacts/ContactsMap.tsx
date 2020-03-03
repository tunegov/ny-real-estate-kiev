import React, { useEffect, useState } from 'react';
import { GOOGLE_MAPS_KEY } from '@constants/index';
import GoogleMapReact from 'google-map-react';

import '@styles/pages/contacts/ContactsMap.scss';

export const Marker = (props: any) => (
  <a
    className="marker"
    target="_blank"
    href={
      props.disable
        ? undefined
        : 'https://maps.google.com/?q=г. Киев, улица О.Гончара 47Б'
    }>
    <div className="marker-inner">
      <div className="marker-inner-inner">
        <div className="marker-inner-inner-inner" />
      </div>
    </div>
  </a>
);

const lat = 50.450474;
const lng = 30.505468;

const ContactsMap = () => {
  return (
    <div className="contacts-map">
      <GoogleMapReact
        bootstrapURLKeys={{ key: GOOGLE_MAPS_KEY }}
        defaultCenter={{
          lat,
          lng
        }}
        defaultZoom={17}
        yesIWantToUseGoogleMapApiInternals>
        <Marker lat={lat} lng={lng} />
      </GoogleMapReact>
    </div>
  );
};

export default ContactsMap;
