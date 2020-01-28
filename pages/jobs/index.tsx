import React from 'react';
import Head from 'next/head';
import { WithTranslation } from 'next-i18next';
import { withTranslation } from '@server/i18n';

import Content from '@components/Content';
import HeaderBlock from '@components/common/HeaderBlock';
import JobsInsert, { JobProps } from '@components/JobsInsert/JobsInsert';

interface Props extends WithTranslation {}

const FakeJobs: JobProps[] = [
  {
    vacancy: 'Менеджер по продаже недвижимости, риелтор ',
    condition: 'Условия:',
    text_conditional:
      'strФункциональные обязанности:Функциональные обязанности:Функциональные обязанности:Функциональные обязанности:Функциональные обязанности:ing',
    salary: '20 000 грн',
    functional: 'Функциональные обязанности:',
    text_functional:
      'stФункциональные обязанности:Функциональные обязанности:Функциональные обязанности:Функциональные обязанности:Функциональные обязанности:ring',
    button: 'Отправить резюме'
  }
];

class JobsPage extends React.Component<Props> {
  static getInitialProps = async () => ({
    namespacesRequired: ['menu', 'common, jobs']
  });

  render() {
    const { t } = this.props;
    return (
      <div>
        <Head>
          <title>{t('jobs.title')}</title>
        </Head>

        <Content>
          <HeaderBlock
            title={t('jobs.title')}
            subtitle={t('jobs.subtitle')}
            imageClassName="jobs"
          />
          {FakeJobs.map((job, index) => (
            <JobsInsert key={index} {...job} />
          ))}
        </Content>
      </div>
    );
  }
}

export default withTranslation('jobs')(JobsPage);
