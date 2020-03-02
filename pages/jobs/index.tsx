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
    text_conditional: [
      'доходы - от 20 000 тыс.грн (% от сделки)',
      <br />,
      'опыт работы не обязателен, проводится постоянно на обучение;',
      <br />,
      'график - полная занятость (в офисе + презентации объектов недвижимости для клиентов)',
      <br />,
      'уникальная база объектов недвижимости, колл-центр, юридическое сопровождение и рекламный отдел.'
    ],
    salary: '20 000 грн',
    functional: 'Функциональные обязанности:',
    text_functional: [
      'Анализ рынка недвижимости и работа с клиентами',
      <br />,
      'Умение планировать свой рабочий процесс;',
      <br />,
      'Подбор необходимых вариантов и качественное обслуживание каждого клиента с любого вида недвижимости;',
      <br />,
      'Организация просмотров, проведение переговоров, заключение договоров;',
      <br />,
      'Постоянное повышение уровня профессионализма в области продажи недвижимости.'
    ],
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
