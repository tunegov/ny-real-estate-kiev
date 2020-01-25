import React, { useEffect, useState } from 'react';
import Plx from 'react-plx';

import '@styles/pages/contacts/Contacts.scss';

interface Props {
  title?: string;
  subtitle?: string;
}

const textParalax = [
  {
    start: 0,
    end: 500,
    properties: [
      {
        startValue: 0,
        endValue: 0,
        property: 'translateY'
      }
    ]
  }
];

const Contacts = (props: Props) => {
  return (
    <Plx parallaxData={textParalax}>
      <div className="contacts">
        <div className="contacts-text">
          <p className="contacts-text-title">{props.title}</p>
          <div className="contacts-line" />
        </div>
        <div className="contacts-images" />
      </div>
    </Plx>
  );
};

export default Contacts;
