import React from 'react';
import { graphql } from 'gatsby';
import SEO from '../../components/Seo';
import Layout from '../../components/Layout';
import LandingSectionRenderer from '../../components/LandingSectionRenderer';
import PageSchema from '../../components/PageSchema';
import OGTags from '../../components/OGTags';

const LandingPage = (props: LandingPageProps) => {
  const {
    data: { page },
  } = props;

  page.seo = page.seo || {};

  const site = {};
  return (
    <Layout className="home-page">
      <SEO
        lang={'tl-ph'}
        title={page.name}
        description={site.description}
        keywords={site.keywords}
      />
      <PageSchema
        type={'WebPage'}
        name={page.name}
        description={page.name}
        slug={page.slug.current}
        data={page}
      />
      <OGTags type={'page'} slug={page.slug.current} data={page} />
      {page.landingSections.map(section => (
        <LandingSectionRenderer key={section.id} section={section} />
      ))}
    </Layout>
  );
};

export default LandingPage;

export const query = graphql`
  query($id: String!) {
    page: sanityLandingPage(id: { eq: $id }) {
      ...LandingPageFieldsFull
    }
  }
`;

interface LandingPageProps {
  data: {
    page: any;
  };
  pageContext: {
    id: string;
    slug: string;
    title: string;
  };
}
