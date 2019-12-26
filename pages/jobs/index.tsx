import React from 'react';
import Head from 'next/head';
import Menu from '../../src/components/Menu';

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

        <Menu />
      </div>
    );
  }
}

export default JobsPage;
