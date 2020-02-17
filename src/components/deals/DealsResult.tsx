import React from 'react';

interface Props {
  deals: any[];
}

const DealsResult = (props: Props) => {
  return (
    <div className="deal-content">
      <div className="deal-content-list">
        {props.deals.map(deal => (
          <div key={deal.adid} className="deal-content-list-item">
            {deal.adid}
          </div>
        ))}
      </div>
    </div>
  );
};

export default DealsResult;
