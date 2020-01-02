import React from 'react';
import Head from 'next/head';
import Content from '@components/Content';

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

        <Content>partners</Content>
      </div>
    );
  }
}

export default PartnersPage;
