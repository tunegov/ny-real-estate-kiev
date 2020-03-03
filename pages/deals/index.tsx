import React from 'react';
import Head from 'next/head';
import { WithTranslation } from 'next-i18next';
import { withTranslation } from '@server/i18n';

import Content from '@components/Content';
import DealHeader from '@components/deals/DealHeader';
import SearchParams from '@components/deals/SearchParams';
import DealsResult from '@components/deals/DealsResult';

import { search, getDistricts, getSubway, view } from '@api/deals';

import {
  ByParamsDeal,
  ByParamsProperty,
  SorterFields,
  PriceCurrency,
  PriceKind,
  Params
} from '@type/deals';

interface Props extends WithTranslation {
  dealId?: string | string[];
  title: string;
  property: ByParamsProperty;
}

interface State {
  data: any;
}

class DealsPage extends React.Component<Props, State & Partial<Params>> {
  static getInitialProps = async () => ({
    namespacesRequired: ['menu', 'common', 'deals']
  });

  constructor(props: Props) {
    super(props);

    this.state = {
      deal: 'sell',
      property: props.property,
      // room_count: '1' as ByParamsRoomsCount,
      'price[currency_id]': 'UAH',
      'price[value_from]': undefined,
      'price[value_to]': undefined,
      'area_total[value_from]': undefined,
      'area_total[value_to]': undefined,
      'price[kind]': 'per_object',
      data: [],
      currentPage: 1
    };
  }

  async componentDidMount() {
    const { data, currentPage, ...params } = this.state;

    this.setDeals(params);
  }

  async setDeals(params: Partial<Params>) {
    const deals = await search(this.state.currentPage!, params);

    this.setState({ data: deals || [] });
  }

  onChange = (key: keyof Params, value: any) => {
    const { data, ...params } = this.state;

    const newParams: any = { ...params };
    newParams[key] = value;

    this.setDeals(newParams);

    this.setState(newParams);
  };

  render() {
    const { t, title } = this.props;
    const { data, ...params } = this.state;

    return (
      <div>
        <Head>
          <title>{title}</title>
          <meta property="og:title" content={title} />
          <meta
            property="og:image"
            content="https://ny.com.ua/static/images/logo-without-text.png"
          />
          <meta name="twitter:title" content={title} />
          <meta
            name="twitter:image"
            content="https://ny.com.ua/static/images/logo-without-text.png"
          />
        </Head>

        <Content>
          <DealHeader
            title={title}
            placeholder={t('deals.header.search.placeholder')}
          />
          <SearchParams params={params} onChange={this.onChange.bind(this)} />
          <DealsResult deals={data} />
        </Content>
      </div>
    );
  }
}

export default withTranslation('deals')(DealsPage);
