import React from 'react';
import Head from 'next/head';
import { WithTranslation } from 'next-i18next';
import { withTranslation } from '@server/i18n';
import { motion } from 'framer-motion';

import Content from '@components/Content';
import CallBackForm from '@components/common/CallBackForm';
import Header from '@components/home/Header';
import Categories from '@components/home/Categories';
import CooperationsSteps from '@components/home/CooperationsSteps';
import Modal from '@components/home/Modal';

interface Props extends WithTranslation {}

class HomePage extends React.Component<Props> {
  static getInitialProps = async () => ({
    namespacesRequired: ['menu', 'common', 'home'],
  });

  state = {
    modalVisible: false,
  };

  openModal() {
    document.body.style.overflow = 'hidden';
    this.setState({ modalVisible: true });
  }

  closeModal(e: any) {
    e.stopPropagation();
    document.body.style.overflow = 'overlay';
    this.setState({ modalVisible: false });
  }

  render() {
    const { t } = this.props;
    return (
      <motion.div
        initial="initial"
        animate="animate"
        exit="exit"
        variants={{ exit: { transition: { staggerChildren: 0.1 } } }}>
        <Head>
          <title>{t('home.title')}</title>
          <meta property="og:title" content={t('home.title')} />
          <meta
            property="og:image"
            content="https://ny.com.ua/static/images/logo-without-text.png"
          />
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <Header
          buttonLabel={t('home.header.button.text')}
          buttonOnClick={this.openModal.bind(this)}
        />
        <Modal
          visible={this.state.modalVisible}
          onClose={this.closeModal.bind(this)}
        />
        <Categories />
        <CooperationsSteps />
        <CallBackForm />
      </motion.div>
    );
  }
}

export default withTranslation('home')(HomePage);
