import React from 'react';
import Head from 'next/head';
import { WithTranslation } from 'next-i18next';
import { withTranslation } from '@server/i18n';

import Content from '@components/Content';
import DealHeader from '@components/deals/DealHeader';

interface Props extends WithTranslation {
  dealId?: string | string[];
  title: string;
}

class DealsPage extends React.Component<Props> {
  static getInitialProps = async () => ({
    namespacesRequired: ['menu', 'common', 'deals']
  });

  componentDidMount() {
    const { t, dealId } = this.props;

    switch (dealId) {
      case 'retail': {
        return 'retail';
      }
      case 'flats': {
        return 'flats';
      }
      case 'offices': {
        return 'offices';
      }
      case 'homes': {
        return 'homes';
      }

      default: {
        return null;
      }
    }
  }

  render() {
    const { t, title } = this.props;

    return (
      <div>
        <Head>
          <title>{title}</title>
        </Head>

        <Content>
          <DealHeader
            title={title}
            placeholder={t('deals.header.search.placeholder')}
          />
        </Content>
      </div>
    );
  }
}

export default withTranslation('deals')(DealsPage);
