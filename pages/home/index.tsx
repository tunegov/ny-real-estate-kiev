import React from 'react';
import Head from 'next/head';
import { WithTranslation } from 'next-i18next';
import { withTranslation } from '@server/i18n';

import Content from '@components/Content';
import CallBackForm from '@components/common/CallBackForm';
import Header from '@components/home/Header';
import Categories from '@components/home/Categories';
import CooperationsSteps from '@components/home/CooperationsSteps';

interface Props extends WithTranslation {}

class HomePage extends React.Component<Props> {
  static getInitialProps = async () => ({
    namespacesRequired: ['menu', 'common', 'home']
  });

  openModal() {}

  render() {
    const { t } = this.props;
    return (
      <div>
        <Head>
          <title>{t('home.title')}</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <Content withPattern>
          <Header
            buttonLabel={t('home.header.button.text')}
            buttonOnClick={this.openModal.bind(this)}
          />
          <Categories />
          <CooperationsSteps />
          <CallBackForm />
        </Content>
      </div>
    );
  }
}

export default withTranslation('home')(HomePage);
