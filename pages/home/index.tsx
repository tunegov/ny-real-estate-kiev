import React from 'react';
import Head from 'next/head';
import Header from '@components/Header';

class HomePage extends React.Component {
  static getInitialProps = async () => ({
    namespacesRequired: ['menu', 'common']
  });

  render() {
    return (
      <div>
        <Head>
          <title>Home</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <Header />
      </div>
    );
  }
}

export default HomePage;
