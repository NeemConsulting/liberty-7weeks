import React, { FunctionComponent } from 'react';
import SEO from '../../components/Seo';
import Layout from '../../components/Layout';
import Search from '../../search';

const searchIndices = [
  { name: `platformLiberty`, title: `platformLiberty`, hitComp: `PostHit` },
];

const SearchResults: FunctionComponent = () => {
  return (
    <Layout>
      <SEO lang={'tl-ph'} title="" description="" keywords="" />
      <Search collapse="true" indices={searchIndices} />
    </Layout>
  );
};
export default SearchResults;
