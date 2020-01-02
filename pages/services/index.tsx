import React from 'react';
import Head from 'next/head';
import Header from '@components/Header';

interface Props {
  sid?: string | string[];
}

class ServicesPage extends React.Component<Props> {
  static getInitialProps = async () => ({
    namespacesRequired: ['menu', 'common']
  });

  render() {
    return (
      <div>
        <Head>
          <title>Services</title>
        </Head>

        <Header />
        {this.props.sid}
      </div>
    );
  }
}

export default ServicesPage;
