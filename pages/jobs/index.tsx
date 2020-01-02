import React from 'react';
import Head from 'next/head';
import Content from '@components/Content';

class JobsPage extends React.Component {
  static getInitialProps = async () => ({
    namespacesRequired: ['menu', 'common']
  });

  render() {
    return (
      <div>
        <Head>
          <title>Jobs</title>
        </Head>

        <Content>jobs</Content>
      </div>
    );
  }
}

export default JobsPage;
