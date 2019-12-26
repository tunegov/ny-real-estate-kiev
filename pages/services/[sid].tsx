import React from 'react';
import { withRouter, NextRouter } from 'next/router';
import Services from './index';

interface Props {
  sid?: string | string[];
  router: NextRouter;
}

class ServicesWithIdPage extends React.Component<Props> {
  static getInitialProps = async () => ({
    namespacesRequired: ['menu', 'common']
  });

  render() {
    const { sid } = this.props.router.query;

    return <Services sid={sid} />;
  }
}

export default withRouter(ServicesWithIdPage);
