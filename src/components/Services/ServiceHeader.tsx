import React from 'react';

import '@styles/pages/services/ServiceHeader.scss';

interface Props {
  title: string;
  subtitle?: string;
  imageClassName: string;
}

const ServiceHeader = (props: Props) => {
  return (
    <div className="service-header">
      <div className="service-header-text">
        <div className="service-header-text-title">{props.title}</div>
        {!!props.subtitle && (
          <div className="service-header-text-subtitle">{props.subtitle}</div>
        )}
      </div>
      <div className={`service-header-image ${props.imageClassName}`} />
    </div>
  );
};

export default ServiceHeader;
