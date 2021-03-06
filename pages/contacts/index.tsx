import React from 'react';
import Head from 'next/head';
import { WithTranslation } from 'next-i18next';
import { withTranslation } from '@server/i18n';
import { motion } from 'framer-motion';

import Content from '@components/Content';

import Contacts from '@components/contacts/Contacts';
import ContactsInfo from '@components/contacts/ContactsInfo';
import ContactsLocation from '@components/contacts/ContactsLocation';
import ContactsForm from '@components/contacts/ContactsForm';
import ContactsMap from '@components/contacts/ContactsMap';

const contactsVariants = {
  initial: { scale: 0.96, y: 30, opacity: 0 },
  enter: {
    scale: 1,
    y: 0,
    opacity: 1,
    transition: { duration: 0.5, ease: [0.48, 0.15, 0.25, 0.96] },
  },
  exit: {
    scale: 0.6,
    y: 100,
    opacity: 0,
    transition: { duration: 0.2, ease: [0.48, 0.15, 0.25, 0.96] },
  },
};

interface Props extends WithTranslation {}

class ContactsPage extends React.Component<Props> {
  static getInitialProps = async () => ({
    namespacesRequired: ['menu', 'common', 'contacts'],
  });

  render() {
    const { t } = this.props;
    return (
      <motion.div exit={{ opacity: 0 }} initial="initial" animate="animate">
        <Head>
          <title>{t('contacts.title')}</title>
          <meta property="og:title" content={t('contacts.title')} />
          <meta
            property="og:image"
            content="https://ny.com.ua/static/images/logo-without-text.png"
          />
          <meta name="twitter:title" content={t('contacts.title')} />
          <meta
            name="twitter:image"
            content="https://ny.com.ua/static/images/logo-without-text.png"
          />
        </Head>

        <Contacts title={t('contacts.title')} />
        <ContactsInfo
          title={t('contacts-info.title')}
          mail={t('contacts-info.mail')}
          phone={t('contacts-info.phone')}
          location={t('contacts-info.l')}
        />
        <ContactsLocation
          title={t('contacts-location.title')}
          location1={t('contacts-location.location1')}
          location2={t('contacts-location.location2')}
          location3={t('contacts-location.location3')}
        />
        <div className="contacts-bottom">
          <ContactsForm />
          <ContactsMap />
        </div>
      </motion.div>
    );
  }
}

export default withTranslation('contacts')(ContactsPage);
