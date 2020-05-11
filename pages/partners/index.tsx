import React from 'react';
import Head from 'next/head';
import { WithTranslation } from 'next-i18next';
import { withTranslation } from '@server/i18n';

import Content from '@components/Content';
import HeaderBlock from '@components/common/HeaderBlock';
import ParthnersInsert from './ParthnersInsert/ParthnersInsert';
import ParthnersLogo from './ParthnersInsert/ParthnersLogo';
import ParthnersAdvantages from './ParthnersInsert/ParthnersAdvantages';

interface Props extends WithTranslation {}

class PartnersPage extends React.Component<Props> {
  static getInitialProps = async () => ({
    namespacesRequired: ['menu', 'common', 'jobs'],
  });

  render() {
    const { t } = this.props;
    return (
      <div>
        <Head>
          <title>{t('partners.title')}</title>
          <meta property="og:title" content={t('partners.title')} />
          <meta
            property="og:image"
            content="https://ny.com.ua/static/images/logo-without-text.png"
          />
          <meta name="twitter:title" content={t('partners.title')} />
          <meta
            name="twitter:image"
            content="https://ny.com.ua/static/images/logo-without-text.png"
          />
        </Head>

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
        <ParthnersAdvantages
          title={t('partners-advantages.title')}
          subtitle={t('partners-advantages.subtitle')}
        />
      </div>
    );
  }
}

export default withTranslation('partners')(PartnersPage);
