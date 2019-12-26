import React from 'react';
import Head from 'next/head';
import Menu from '../../src/components/Menu';

class TeamPage extends React.Component {
  static getInitialProps = async () => ({
    namespacesRequired: ['menu', 'common']
  });

  render() {
    return (
      <div>
        <Head>
          <title>Team</title>
        </Head>

        <Menu />
      </div>
    );
  }
}

export default TeamPage;
