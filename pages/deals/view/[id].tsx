import React from 'react';
import ImageGallery from 'react-image-gallery';
import { withRouter, NextRouter } from 'next/router';
import { WithTranslation } from 'next-i18next';
import { withTranslation } from '@server/i18n';
import GoogleMapReact from 'google-map-react';
import Head from 'next/head';
import Content from '@components/Content';

import { GOOGLE_MAPS_KEY } from '@constants/index';
import { view } from '@api/deals';
import { DealView, ViewMedia } from '@type/deals';
import { parseImg } from '@utils/deals';

import '@styles/pages/deals/view/DealView.scss';
import { Marker } from '@components/contacts/ContactsMap';

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
              <h3>{t('deals.view.props')}</h3>
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
