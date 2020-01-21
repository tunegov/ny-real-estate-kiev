import React from 'react';
import Head from 'next/head';
import { WithTranslation } from 'next-i18next';
import { withTranslation } from '@server/i18n';

import Content from '@components/Content';
import HeaderBlock from '@components/common/HeaderBlock';
import ParthnersInsert from './ParthnersInsert/ParthnersInsert';
import ParthnersLogo from './ParthnersInsert/ParthnersLogo';

interface Props extends WithTranslation {}

class PartnersPage extends React.Component<Props> {
  static getInitialProps = async () => ({
    namespacesRequired: ['menu', 'common', 'jobs']
  });

  render() {
    const { t } = this.props;
    return (
      <div>
        <Head>
          <title>{t('partners.title')}</title>
        </Head>

        <Content>
          <HeaderBlock
            title={t('partners.title')}
            subtitle={t('partners.subtitle')}
            imageClassName="partners"
          />
          <ParthnersInsert
            title={t('partners-insert.title')}
            subtitle={t('partners-insert.subtitle')}
          />
          <ParthnersLogo imageClassName="parthners-logo" />
        </Content>
      </div>
    );
  }
}

export default withTranslation('partners')(PartnersPage);
