import React from 'react';
import ImageGallery from 'react-image-gallery';
import { withRouter, NextRouter } from 'next/router';
import { WithTranslation } from 'next-i18next';
import { withTranslation } from '@server/i18n';
import GoogleMapReact from 'google-map-react';
import Head from 'next/head';
import Content from '@components/Content';
import get from 'lodash/get';

import { GOOGLE_MAPS_KEY } from '@constants/index';
import { view } from '@api/deals';
import { DealView, ViewMedia } from '@type/deals';
import { parseImg } from '@utils/deals';

import '@styles/pages/deals/view/DealView.scss';
import { Marker } from '@components/contacts/ContactsMap';

type Prop = {
  key: string;
  default: string;
  translate?: boolean;
};

const PROPS: Prop[] = [
  {
    key: 'housing_class',
    default: '',
    translate: false
  },
  {
    key: 'transport',
    default: '',
    translate: false
  },
  {
    key: 'subway_station',
    default: '',
    translate: false
  },
  {
    key: 'storey',
    default: '',
    translate: false
  },
  {
    key: 'storeys',
    default: '',
    translate: false
  },
  {
    key: 'room_count',
    default: '',
    translate: false
  },
  {
    key: 'bedroom_count',
    default: '',
    translate: false
  },
  {
    key: 'bathroom_count',
    default: '',
    translate: false
  },
  {
    key: 'balcony_count',
    default: '',
    translate: false
  },
  {
    key: 'repair',
    default: '',
    translate: false
  }
];

interface Props extends WithTranslation {
  id?: string;
  router: NextRouter;
  item?: Partial<DealView>;
}

interface State {}

class DealViewPage extends React.Component<Props, State> {
  static async getInitialProps({ req, query }) {
    const { id } = query;
    const item = await view(String(id));
    return {
      namespacesRequired: ['menu', 'common'],
      item
    };
  }

  _getImagesForGallery(images: ViewMedia) {
    const keys = Object.keys(images).filter(key => !!Number(key));
    return keys.map(key => ({
      thumbnail: parseImg(images[key].src_small),
      original: parseImg(images[key].src_middle)
    }));
  }

  renderPropsItem(prop: Prop) {
    const { t, item } = this.props!;

    const value = get(item, prop.key, prop.default);
    if (!value) {
      return null;
    }

    return (
      <div className="deal-view-content-top-props-item">
        <div className="deal-view-content-top-props-item-left">
          {t(`deals.view.prop.${prop.key}`)}:
        </div>
        <div className="deal-view-content-top-props-item-right">
          {prop.translate ? t(`deals.view.prop.values.${value}`) : value}
        </div>
      </div>
    );
  }

  renderContent() {
    const { t } = this.props!;
    const item = this.props.item!;

    if (!item.adid) {
      return null;
    }

    const address = `${item.district}${
      item.street_alias ? ', ' + item.street_alias : ''
    }${item.housestr ? ', ' + item.housestr : ''}`;

    const images = this._getImagesForGallery(item.media!);
    const lat = parseFloat(item.lat!);
    const lng = parseFloat(item.lng!);

    return (
      <div className="deal-view">
        <div className="deal-view-header">
          <h1>{item.property_complex}</h1>
          <h2>{address}</h2>
        </div>
        <div className="deal-view-content">
          <div className="deal-view-content-top">
            <div className="deal-view-content-top-gallery">
              <ImageGallery
                items={images}
                lazyLoad
                showPlayButton={false}
                showThumbnails={false}
                renderLeftNav={this.renderLeftNav.bind(this)}
                renderRightNav={this.renderRightNav.bind(this)}
              />
            </div>
            <div className="deal-view-content-top-props">
              {/* <h3>{t('deals.view.props')}</h3> */}
              <div className="deal-view-content-top-props-values">
                <h1>{get(item, 'base_price')}</h1>
                <h2>
                  {t('deals.view.prop.area_price', {
                    area: get(item, 'price.native.value_m2')
                  })}
                </h2>
                <div className="deal-view-content-top-props-item">
                  <div className="deal-view-content-top-props-item-left">
                    {t(`deals.view.prop.area`)}:
                  </div>
                  <div className="deal-view-content-top-props-item-right">
                    {get(item, 'area_total')}
                    {get(item, 'area_life')
                      ? ` \ ${get(item, 'area_life')}`
                      : ''}
                    {get(item, 'area_kitchen')
                      ? ` \ ${get(item, 'area_kitchen')}`
                      : ''}
                  </div>
                </div>
                <div className="deal-view-content-top-props-item">
                  <div className="deal-view-content-top-props-item-left">
                    {t(`deals.view.prop.room_count`)}:
                  </div>
                  <div className="deal-view-content-top-props-item-right">
                    {get(item, 'room_count')}
                  </div>
                </div>
                <div className="deal-view-content-top-props-item">
                  <div className="deal-view-content-top-props-item-left">
                    {t(`deals.view.prop.storeys`)}:
                  </div>
                  <div className="deal-view-content-top-props-item-right">
                    {t(`deals.view.prop.storey_count`, {
                      storey: get(item, 'storey')
                    })}{' '}
                    /{' '}
                    {t(`deals.view.prop.storeys_count`, {
                      storeys: get(item, 'storeys')
                    })}
                  </div>
                </div>
                {get(item, 'housing_class') ? (
                  <div className="deal-view-content-top-props-item">
                    <div className="deal-view-content-top-props-item-left">
                      {t(`deals.view.prop.housing_class`)}:
                    </div>
                    <div className="deal-view-content-top-props-item-right">
                      {get(item, 'housing_class')}
                    </div>
                  </div>
                ) : null}
                {get(item, 'repair') ? (
                  <div className="deal-view-content-top-props-item">
                    <div className="deal-view-content-top-props-item-left">
                      {t(`deals.view.prop.repair`)}:
                    </div>
                    <div className="deal-view-content-top-props-item-right">
                      {get(item, 'repair')}
                    </div>
                  </div>
                ) : null}
                {/* {PROPS.map(this.renderPropsItem.bind(this))} */}
              </div>
              <div className="deal-view-content-top-props-pattern"></div>
            </div>
          </div>
          <div className="deal-view-content-text">{item?.promo_text}</div>
        </div>

        <div className="deal-view-map">
          <GoogleMapReact
            bootstrapURLKeys={{ key: GOOGLE_MAPS_KEY }}
            defaultCenter={{
              lat,
              lng
            }}
            defaultZoom={17}
            yesIWantToUseGoogleMapApiInternals>
            <Marker lat={lat} lng={lng} disable />
          </GoogleMapReact>
        </div>
      </div>
    );
  }

  renderGalleryNav(onClick: any, disabled: boolean, side: string) {
    return (
      <button
        className={`image-gallery-custom-nav ${side}`}
        disabled={disabled}
        onClick={onClick}>
        <div className={`image-gallery-custom-nav-img ${side}`} />
      </button>
    );
  }

  renderLeftNav(onClick: any, disabled: boolean) {
    return this.renderGalleryNav(onClick, disabled, 'left');
  }

  renderRightNav(onClick: any, disabled: boolean) {
    return this.renderGalleryNav(onClick, disabled, 'right');
  }

  renderMetaTags() {
    const item = this.props.item!;

    const title = `${
      item.property_complex ? item.property_complex + ' - ' : ''
    }${item.adid}`;

    const address = `${item.district}${
      item.street_alias ? ', ' + item.street_alias : ''
    }${item.housestr ? ', ' + item.housestr : ''}`;

    const img = parseImg(item.media!.src_small);

    return (
      <>
        <title>{title}</title>

        <meta property="og:title" content={title} />
        <meta property="og:description" content={address} />
        <meta
          property="og:url"
          content={`https://ny.com.ua${this.props.router.asPath}`}
        />
        <meta property="og:image" content={img} />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={address} />
        <meta name="twitter:image" content={img} />
        <meta name="twitter:card" content="summary_large_image" />
      </>
    );
  }

  render() {
    return (
      <div>
        <Head>{this.renderMetaTags()}</Head>

        <Content>{this.renderContent()}</Content>
      </div>
    );
  }
}

export default withTranslation('deals')(withRouter(DealViewPage));
