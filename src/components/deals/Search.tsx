import React, { useState } from 'react';

import Input from '@components/Input';

import '@styles/components/deals/Search.scss';

interface Props {
  placeholder: string;
}

const Search = (props: Props) => {
  const [search, setSearch] = useState('');
  return (
    <div className="deal-search">
      <div className="deal-search-icon" />
      <Input
        placeholder={props.placeholder}
        value={search}
        onChange={e => setSearch(e.target.value)}
      />
    </div>
  );
};

export default Search;
