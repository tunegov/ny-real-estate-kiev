import React from 'react';
import { withRouter, NextRouter } from 'next/router';
import { WithTranslation } from 'next-i18next';
import { withTranslation } from '@server/i18n';
import Deals from './index';

interface Props extends WithTranslation {
  dealId?: string | string[];
  router: NextRouter;
}

class DealsWithIdPage extends React.Component<Props> {
  static getInitialProps = async () => ({
    namespacesRequired: ['menu', 'common']
  });

  render() {
    const { dealId } = this.props.router.query;
    const title = this.props.t(`deals.${dealId}.title`);

    return <Deals dealId={dealId} title={title} />;
  }
}

export default withTranslation('deals')(withRouter(DealsWithIdPage));
