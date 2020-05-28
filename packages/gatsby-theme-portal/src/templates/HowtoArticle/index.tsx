import React from 'react';
import { graphql } from 'gatsby';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import SEO from '../../components/Seo';
import Layout from '../../components/Layout';
import RelatedArticles from '../../components/RelatedArticles';
import RichText from '../../components/RichText';
import Breadcrumb from '../../components/Breadcrumb';
import ArticleHeader from '../../components/ArticleHeader';
import ToolList from '../../components/ToolList';
import ProductList from '../../components/ProductList';
import Tags from '../../components/Tags';
import ReadNext from '../../components/ReadNext';
import PageSchema from '../../components/PageSchema';

const useStyles = makeStyles(theme => ({
  articleBody: {
    fontSize: '1.125rem',
    fontWeight: 400,
    color: '#333',
  },
}));

const HowtoArticlePage = (props: HowtoArticlePageProps) => {
  const {
    data: {
      page,
      galleryArticles: { nodes: galleryNodes },
      featureArticles: { nodes: featureNodes },
      howToArticles: { nodes: howToNodes },
    },
  } = props;

  const classes = useStyles();
  const relatedArticles = [...galleryNodes, ...featureNodes, ...howToNodes];

  page.seo = page.seo || {};

  return (
    <Layout>
      <SEO
        lang={'tl-ph'}
        title={page.seo.metaTitle}
        description={page.seo.metaDescription}
        keywords={page.seo.metaKeywords}
      />
      <Breadcrumb tag={page.tags[0]} pageTitle={page.headline} />
      <PageSchema
        type={'HowTo'}
        name={page.headline}
        description={page.subheading}
        slug={page.slug.current}
        image={{
          url: page.heroImage.asset.url,
          width: page.heroImage.asset.metadata.dimensions.width,
          height: page.heroImage.asset.metadata.dimensions.height,
        }}
        data={page}
      />
      <Container maxWidth="lg">
        <Grid container spacing={2}>
          <Grid className={classes.articleBody} item sm={7}>
            <ArticleHeader article={page} type={'howto'} />
            {page.toolList && <ToolList data={page.toolList} />}
            {page.productList && <ProductList data={page.productList} />}
            <RichText data={page._rawHowTobody} />
            {page.readnext && <ReadNext data={page} />}
          </Grid>
          <Grid item sm={1}></Grid>
          <Grid item sm={4}>
            {relatedArticles.length !== 0 && (
              <RelatedArticles articles={relatedArticles} />
            )}
          </Grid>
        </Grid>
        <Tags data={page.tags} />
      </Container>
    </Layout>
  );
};

export default HowtoArticlePage;

export const query = graphql`
  query($slug: String!, $tags: [String!], $id: [String!]) {
    galleryArticles: allSanityGalleryArticle(
      filter: { tags: { elemMatch: { name: { in: $tags } } }, id: { nin: $id } }
      limit: 10
      sort: { fields: _createdAt, order: DESC }
    ) {
      nodes {
        ...GalleryFieldsTile
      }
    }

    howToArticles: allSanityHowToArticle(
      filter: { tags: { elemMatch: { name: { in: $tags } } }, id: { nin: $id } }
      limit: 10
      sort: { fields: _createdAt, order: DESC }
    ) {
      nodes {
        ...HowToFieldsTile
      }
    }

    featureArticles: allSanityFeatureArticle(
      filter: { tags: { elemMatch: { name: { in: $tags } } }, id: { nin: $id } }
      limit: 10
      sort: { fields: _createdAt, order: DESC }
    ) {
      nodes {
        ...FeatureFieldsTile
      }
    }
    page: sanityHowToArticle(slug: { current: { eq: $slug } }) {
      ...HowToFieldsFull
    }
  }
`;

interface HowtoArticlePageProps {
  data: {
    page: any;
    galleryArticles: any;
    featureArticles: any;
    howToArticles: any;
  };
  pageContext: {
    slug: string;
    title: string;
  };
  location: WindowLocation;
}
