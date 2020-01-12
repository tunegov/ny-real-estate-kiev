import React from 'react';
import Head from 'next/head';
import Content from '@components/Content';

import CallBackForm from '@components/common/CallBackForm';

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

        <Content>
          <CallBackForm />
        </Content>
      </div>
    );
  }
}

export default HomePage;
