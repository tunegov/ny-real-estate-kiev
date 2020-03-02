import React from 'react';
import { withRouter, NextRouter } from 'next/router';
import { WithTranslation } from 'next-i18next';
import { withTranslation } from '@server/i18n';
import Head from 'next/head';

import Content from '@components/Content';

interface Props extends WithTranslation {
  id?: string;
  router: NextRouter;
}

class DealViewPage extends React.Component<Props> {
  static getInitialProps = async () => ({
    namespacesRequired: ['menu', 'common']
  });

  render() {
    const { id } = this.props.router.query;

    return (
      <div>
        <Head>
          <title>{id}</title>
        </Head>

        <Content>
          <div></div>
        </Content>
      </div>
    );
  }
}

export default withTranslation('deals')(withRouter(DealViewPage));
