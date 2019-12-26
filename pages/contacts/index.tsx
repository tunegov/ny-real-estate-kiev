import React from 'react';
import Head from 'next/head';
import Menu from '../../src/components/Menu';

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

        <Menu />
      </div>
    );
  }
}

export default ContactsPage;
