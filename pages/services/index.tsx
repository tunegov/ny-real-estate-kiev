import React from 'react';
import Head from 'next/head';
import { WithTranslation } from 'next-i18next';
import { withTranslation } from '@server/i18n';
import { motion } from 'framer-motion';

import Content from '@components/Content';
import CallBackForm from '@components/common/CallBackForm';
import ManufactoringOfPassports from '@components/services/ManufactoringOfPassports';
import BuyingProperty from '@components/services/BuyingProperty';
import LegalSupport from '@components/services/LegalSupport';
import PropertyForSale from '@components/services/PropertyForSale';
import ExpertReview from '@components/services/ExpertReview';
import FreeConsulting from '@components/services/FreeConsulting';

interface Props extends WithTranslation {
  sid?: string | string[];
  title: string;
}

class ServicesPage extends React.Component<Props> {
  static getInitialProps = async () => ({
    namespacesRequired: ['menu', 'common', 'services'],
  });

  renderServiceContent() {
    const { t, sid } = this.props;

    switch (sid) {
      case 'buying_a_property': {
        return <BuyingProperty t={t} />;
      }
      case 'property_for_sale': {
        return <PropertyForSale t={t} />;
      }
      case 'legal_support': {
        return <LegalSupport t={t} />;
      }
      case 'expert_review': {
        return <ExpertReview t={t} />;
      }
      case 'free_consulting': {
        return <FreeConsulting t={t} />;
      }
      case 'manufacturing_of_passports': {
        return <ManufactoringOfPassports t={t} />;
      }

      default: {
        return null;
      }
    }
  }

  render() {
    return (
      <motion.div exit={{ opacity: 0 }} initial="initial" animate="animate">
        <Head>
          <title>{this.props.title}</title>
          <meta property="og:title" content={this.props.title} />
          <meta
            property="og:image"
            content="https://ny.com.ua/static/images/logo-without-text.png"
          />
          <meta name="twitter:title" content={this.props.title} />
          <meta
            name="twitter:image"
            content="https://ny.com.ua/static/images/logo-without-text.png"
          />
        </Head>
        {this.renderServiceContent()}
        <CallBackForm />
      </motion.div>
    );
  }
}

export default withTranslation('services')(ServicesPage);
