import React from 'react';
import Head from 'next/head';
import Menu from '../../src/components/Menu';

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

        <Menu />
      </div>
    );
  }
}

export default HomePage;
