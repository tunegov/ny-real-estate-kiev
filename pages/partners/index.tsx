import React from 'react';
import Head from 'next/head';
import Header from '@components/Header';

class PartnersPage extends React.Component {
  static getInitialProps = async () => ({
    namespacesRequired: ['menu', 'common']
  });

  render() {
    return (
      <div>
        <Head>
          <title>Partners</title>
        </Head>

        <Header />
      </div>
    );
  }
}

export default PartnersPage;
