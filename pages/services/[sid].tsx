import React from 'react';
import { withRouter, NextRouter } from 'next/router';
import { WithTranslation } from 'next-i18next';
import { withTranslation } from '@server/i18n';
import Services from './index';

interface Props extends WithTranslation {
  sid?: string | string[];
  router: NextRouter;
}

class ServicesWithIdPage extends React.Component<Props> {
  static getInitialProps = async () => ({
    namespacesRequired: ['menu', 'common']
  });

  render() {
    const { sid } = this.props.router.query;
    const title = this.props.t(`services.${sid}.title`);

    return <Services sid={sid} title={title} />;
  }
}

export default withTranslation('services')(withRouter(ServicesWithIdPage));
