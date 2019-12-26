import React from 'react';
import Head from 'next/head';
import Menu from '../../src/components/Menu';

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

        <Menu />
      </div>
    );
  }
}

export default PartnersPage;
