import * as React from 'react';
import { NextPage } from 'next';

import { withTranslation } from '@server/i18n';
import Content from '@components/Content';

import '@styles/pages/error/NotFound.scss';

const Error: NextPage<any, any> = ({ t, statusCode }) => {
  return (
    <Content>
      <div id="notfound">
        <div className="notfound">
          <div className="notfound-404">
            <h1>
              4<span>0</span>4
            </h1>
          </div>
          <h2>{t('common.404')}</h2>
        </div>
      </div>
    </Content>
  );
};

// Error.getInitialProps = async ({ res, err }) => {
//   let statusCode;

//   if (res) {
//     ({ statusCode } = res);
//   } else if (err) {
//     ({ statusCode } = err);
//   }

//   return {
//     namespacesRequired: ['common'],
//     statusCode
//   };
// };

export default withTranslation('common')(Error);
