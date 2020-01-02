import React from 'react';
import Head from 'next/head';
import Header from '@components/Header';

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

        <Header />
      </div>
    );
  }
}

export default ContactsPage;
