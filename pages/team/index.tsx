import React from 'react';
import Head from 'next/head';
import Content from '@components/Content';

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

        <Content>team</Content>
      </div>
    );
  }
}

export default TeamPage;
