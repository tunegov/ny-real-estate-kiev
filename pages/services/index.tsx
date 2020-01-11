import React from 'react';
import Head from 'next/head';
import { TFunction, WithTranslation } from 'next-i18next';
import { withTranslation } from '@server/i18n';

import Content from '@components/Content';
import CallBackForm from '@components/Services/CallBackForm';
import ManufactoringOfPassports from '@components/Services/ManufactoringOfPassports';
import BuyingProperty from '@components/Services/BuyingProperty';
import LegalSupport from '@components/Services/LegalSupport';
import PropertyForSale from '@components/Services/PropertyForSale';
import ExpertReview from '@components/Services/ExpertReview';
import FreeConsulting from '@components/Services/FreeConsulting';

interface Props extends WithTranslation {
  sid?: string | string[];
}

class ServicesPage extends React.Component<Props> {
  static getInitialProps = async () => ({
    namespacesRequired: ['menu', 'common']
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
      <div>
        <Head>
          <title>Services</title>
        </Head>

        <Content>
          {this.renderServiceContent()}
          <CallBackForm />
        </Content>
      </div>
    );
  }
}

export default withTranslation('services')(ServicesPage);
