import React from 'react';

import Search from './Search';

import '@styles/components/deals/DealHeader.scss';

interface Props {
  title: string;
  placeholder: string;
}

const DealHeader = (props: Props) => {
  return (
    <div className="deal-header">
      <div className="deal-header-top">
        <h1>{props.title}</h1>
        <Search placeholder={props.placeholder} />
      </div>
    </div>
  );
};

export default DealHeader;