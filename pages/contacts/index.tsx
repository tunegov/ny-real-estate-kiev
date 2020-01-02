import React from 'react';
import Head from 'next/head';
import Content from '@components/Content';

class ContactsPage extends React.Component {
  static getInitialProps = async () => ({
    namespacesRequired: ['menu', 'common']
  });

  render() {
    return (
      <div>
        <Head>
          <title>Contacts</title>
        </Head>
        <Content>contacts</Content>
      </div>
    );
  }
}

export default ContactsPage;
