import React from 'react';
import { withRouter, NextRouter } from 'next/router';
import { WithTranslation } from 'next-i18next';
import { withTranslation } from '@server/i18n';
import Head from 'next/head';

import Content from '@components/Content';

import { view } from '@api/deals';
import { DealView } from '@type/deals';

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

  async componentDidMount() {
    // this.setState({ item: item! });
  }

  renderContent() {
    const item = this.props.item!;

    if (!item.adid) {
      return null;
    }

    const address = `${item.district}${
      item.street_alias ? ', ' + item.street_alias : ''
    }${item.housestr ? ', ' + item.housestr : ''}`;

    return (
      <div className="deal-view">
        <div className="deal-view-header">
          <h1>{item.property_complex}</h1>
          <h2>{address}</h2>
        </div>

        {item?.promo_text}
      </div>
    );
  }

  render() {
    const { id } = this.props.router.query;
    console.log(this.props);
    return (
      <div>
        <Head>
          <title>{id}</title>
        </Head>

        <Content>{this.renderContent()}</Content>
      </div>
    );
  }
}

export default withTranslation('deals')(withRouter(DealViewPage));
