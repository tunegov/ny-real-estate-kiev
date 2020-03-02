import React from 'react';
import { withRouter, NextRouter } from 'next/router';
import { WithTranslation } from 'next-i18next';
import { withTranslation } from '@server/i18n';
import Deals from './index';
import { ByParamsProperty } from '@type/deals';

interface Props extends WithTranslation {
  dealId?: string;
  router: NextRouter;
}

class DealsWithIdPage extends React.Component<Props> {
  static getInitialProps = async () => ({
    namespacesRequired: ['menu', 'common']
  });

  getPropertyById(id: string): ByParamsProperty {
    switch (id) {
      case 'retail':
      case 'offices': {
        return 'commercial';
      }
      case 'homes': {
        return ['house', 'plot'];
      }

      case 'flats': {
        return 'flat';
      }
      default: {
        return 'flat';
      }
    }
  }
  render() {
    const { dealId } = this.props.router.query;
    const title = this.props.t(`deals.${dealId}.title`);

    const property = this.getPropertyById(String(dealId));

    return <Deals dealId={dealId} title={title} property={property} />;
  }
}

export default withTranslation('deals')(withRouter(DealsWithIdPage));
