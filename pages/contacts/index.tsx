import React from 'react';
import Head from 'next/head';
import { WithTranslation } from 'next-i18next';
import { withTranslation } from '@server/i18n';

import Content from '@components/Content';
import Contacts from './ContactsInsert/Contacts';
import ContactsInfo from './ContactsInsert/ContactsInfo';

interface Props extends WithTranslation {}

class ContactsPage extends React.Component<Props> {
  static getInitialProps = async () => ({
    namespacesRequired: ['menu', 'common', 'contacts']
  });

  render() {
    const { t } = this.props;
    return (
      <div>
        <Head>
          <title>{t('partners.title')}</title>
        </Head>

        <Content>
          <Contacts title={t('contacts.title')} />
          <ContactsInfo
            title={t('contacts-info.title')}
            mail={t('contacts-info.mail')}
            phone={t('contacts-info.phone')}
            location={t('contacts-info.l')}
          />
        </Content>
      </div>
    );
  }
}

export default withTranslation('contacts')(ContactsPage);
