import React from 'react';
import Head from 'next/head';
import { WithTranslation } from 'next-i18next';
import { withTranslation } from '@server/i18n';

import Content from '@components/Content';
import HeaderBlock from '@components/common/HeaderBlock';

interface Props extends WithTranslation {}

class JobsPage extends React.Component<Props> {
  static getInitialProps = async () => ({
    namespacesRequired: ['menu', 'common, jobs']
  });

  render() {
    const { t } = this.props;
    return (
      <div>
        <Head>
          <title>{t('jobs.title')}</title>
        </Head>

        <Content>
          <HeaderBlock
            title={t('jobs.title')}
            subtitle={t('jobs.subtitle')}
            imageClassName="jobs"
          />
        </Content>
      </div>
    );
  }
}

export default withTranslation('jobs')(JobsPage);
