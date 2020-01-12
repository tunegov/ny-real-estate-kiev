import React from 'react';
import App from 'next/app';
import Head from 'next/head';
import { appWithTranslation } from '@server/i18n';

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
    const { Component, pageProps } = this.props;
    return (
      <>
        <Head>
          <meta httpEquiv="ScreenOrientation" content="autoRotate:disabled" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0, minimum-scale=1.0, user-scalable=no"
          />
        </Head>
        <Component {...pageProps} />
      </>
    );
  }
}

export default appWithTranslation(MyApp);
