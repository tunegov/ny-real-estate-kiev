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
    vacancy: 'Менеджер з продажу нерухомості',
    condition: 'Тебе не вистачає у нашій команді, якщо ти:',
    text_conditional: [
      '- енергійний та цілеспрямований;',
      <br />,
      '- бажаєш навчатися;',
      <br />,
      '- охайний та уважний;',
      <br />,
      '- впевнено працюєш з ПК;',
      <br />,
      '- комунікабельний.'
    ],
    salary: '',
    functional: 'Ми готові надати тобі:',
    text_functional: [
      '- навчання, під час якого ми готуватимемо тебе як досвідченого фахівця на реальних кейсах, та не виженемо тебе «в поля» після інструктажу;',
      <br />,
      '- шанс заробити майже відразу;',
      <br />,
      '- можливість розвиватися в компанії;',
      <br />,
      '- дружній колектив;',
      <br />,
      '- офіс в центрі Києва;',
      <br />,
      '- високий відсоток заробітку від комісійних.'
    ],
    button: 'Відправити резюме'
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
          <meta property="og:title" content={t('jobs.title')} />
          <meta
            property="og:image"
            content="https://ny.com.ua/static/images/logo-without-text.png"
          />
          <meta name="twitter:title" content={t('jobs.title')} />
          <meta
            name="twitter:image"
            content="https://ny.com.ua/static/images/logo-without-text.png"
          />
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
