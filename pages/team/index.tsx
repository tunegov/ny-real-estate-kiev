import React from 'react';
import Head from 'next/head';
import { WithTranslation } from 'next-i18next';
import { withTranslation } from '@server/i18n';

import Content from '@components/Content';
import HeaderBlock from '@components/common/HeaderBlock';
import TeamGallery from '../../src/components/team/TeamGallery';
import TeamInsert from '../../src/components/team/TeamInsert';

interface Props extends WithTranslation {}

class TeamPage extends React.Component<Props> {
  static getInitialProps = async () => ({
    namespacesRequired: ['menu', 'common', 'team'],
  });

  render() {
    const { t } = this.props;
    return (
      <div>
        <Head>
          <title>{t('team.title')}</title>
          <meta property="og:title" content={t('team.title')} />
          <meta
            property="og:image"
            content="https://ny.com.ua/static/images/logo-without-text.png"
          />
          <meta name="twitter:title" content={t('team.title')} />
          <meta
            name="twitter:image"
            content="https://ny.com.ua/static/images/logo-without-text.png"
          />
        </Head>

        <HeaderBlock
          title={t('team.title')}
          subtitle={t('team.subtitle')}
          imageClassName="team"
        />
        <TeamInsert
          title={t('team.insert.title')}
          subtitle={t('team.insert.subtitle')}
        />
        {/* <TeamGallery /> */}
      </div>
    );
  }
}

export default withTranslation('team')(TeamPage);
