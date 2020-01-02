import React from 'react';
import Head from 'next/head';
import Content from '@components/Content';

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

        <Content>{this.props.sid}</Content>
      </div>
    );
  }
}

export default ServicesPage;
