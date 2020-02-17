import React from 'react';
import { WithTranslation } from 'next-i18next';
import { withTranslation } from '@server/i18n';

import '@styles/components/deals/DealsResult.scss';

interface Props extends WithTranslation {
  deals: any[];
}

const DealsResult = ({ t, deals }: Props) => {
  return (
    <div className="deal-content">
      <div className="deal-content-list">
        {deals.map(deal => {
          const address = `${deal.district}${
            deal.street_alias ? ', ' + deal.street_alias : ''
          }${deal.housestr ? ', ' + deal.housestr : ''}`;

          return (
            <div key={deal.adid} className="deal-content-list-item">
              {deal.buyer_not_pay && (
                <div className="deal-content-list-item-fee">
                  {t('deals.item.no_fee')}
                </div>
              )}
              <div className="deal-content-list-item-image">
                <img src={deal.media.src_middle} />
              </div>
              <div className="deal-content-list-item-content">
                <div>
                  {!!deal.property_complex && <h3>{deal.property_complex}</h3>}
                  {!!deal.subway_station && (
                    <p className="deal-content-list-item-content-subway">
                      <img
                        className="deal-content-list-item-content-subway-icon"
                        src="/static/images/subway.png"
                        alt=""
                      />

                      {deal.subway_station}
                    </p>
                  )}
                  <p className="deal-content-list-item-content-address">
                    {address}
                  </p>
                </div>

                <button className="deal-content-list-item-content-button">
                  <div className="deal-content-list-item-content-button-inner">
                    <div className="deal-content-list-item-content-button-area">
                      {deal.area_total} м<sup>2</sup>
                    </div>
                    <div className="deal-content-list-item-content-button-price">
                      {deal.price.value}
                    </div>
                  </div>
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default withTranslation('deals')(DealsResult);
