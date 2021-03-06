import React from 'react';
import App from 'next/app';
import Head from 'next/head';
import { appWithTranslation } from '@server/i18n';
import Content from '@components/Content';
import ReactNotification from 'react-notifications-component';
import { AnimatePresence } from 'framer-motion';

class MyApp extends App {
  componentDidMount() {
    screen.lockOrientationUniversal =
      screen.lockOrientation ||
      screen.lock ||
      screen.mozLockOrientation ||
      screen.msLockOrientation;
    // ScreenOrientation.lock('portrait-primary');
  }

  render() {
    const { Component, pageProps, router } = this.props;

    return (
      <>
        <Head>
          <meta httpEquiv="ScreenOrientation" content="autoRotate:disabled" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0, minimum-scale=1.0, user-scalable=no"
          />
          <meta name="theme-color" content="#f9f9f9" />
        </Head>
        <ReactNotification />
        <Content withPattern={router.route === '/home'}>
          <AnimatePresence exitBeforeEnter>
            <Component {...pageProps} key={router.route} />
          </AnimatePresence>
        </Content>
      </>
    );
  }
}

export default appWithTranslation(MyApp);
