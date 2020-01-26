import React, { useEffect, useState } from 'react';
import Plx from 'react-plx';
import { GOOGLE_MAPS_KEY } from '@constants/index';
import GoogleMapReact from 'google-map-react';

import '@styles/pages/contacts/ContactsMap.scss';

const ContactsMap = () => {
  return (
    <div className="contacts-map">
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
  );
};

export default ContactsMap;