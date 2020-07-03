import React from 'react';
import { graphql } from 'gatsby';
import BlockContent from '@sanity/block-content-to-react';
import Container from '@material-ui/core/Container';
import SEO from '../../components/Seo';
import Layout from '../../components/Layout';
import LandingSectionRenderer from '../../components/LandingSectionRenderer';
import PageSchema from '../../components/PageSchema';
import OGTags from '../../components/OGTags';
import Breadcrumb from '../../components/Breadcrumb';
import { blockTypeDefaultSerializers } from '../../helpers/sanity';
import useStyles from './styles';

const LandingPage = (props: LandingPageProps) => {
  const {
    data: { page },
  } = props;
  const classes = useStyles();

  page.seo = page.seo || {};

  const site = {};

  const getLayoutClassName = type => {
    return type.replace(/\s/g, '-').toLowerCase();
  };

  return (
    <Layout className={getLayoutClassName(page.name)}>
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
        slug={page.path}
        data={page}
      />
      <OGTags type={'page'} slug={page.path} data={page} />
      {page.path !== '/' && <Breadcrumb pageTitle={page.name} />}
      {(page.headline || page._rawIntroduction) && (
        <Container maxWidth="lg">
          <div className={classes.pageContext}>
            {page.headline && (
              <h1 className={classes.headline}>{page.headline}</h1>
            )}
            {page._rawIntroduction && (
              <BlockContent
                serializers={blockTypeDefaultSerializers}
                blocks={page._rawIntroduction}
              />
            )}
          </div>
        </Container>
      )}
      {page.landingSections.map((section, index) => (
        <LandingSectionRenderer
          key={section.id}
          section={section}
          preferPerformance={index <= 1}
        />
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
