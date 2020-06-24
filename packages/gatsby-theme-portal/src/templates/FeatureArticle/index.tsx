import React from 'react';
import { graphql } from 'gatsby';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import SEO from '../../components/Seo';
import Layout from '../../components/Layout';
import RelatedArticles from 'src/components/RelatedArticles';
import Breadcrumb from 'src/components/Breadcrumb';
import RichText from 'src/components/RichText';
import ReadNext from 'src/components/ReadNext';
import Tags from 'src/components/Tags';
import ToolList from 'src/components/ToolList';
import ProductList from 'src/components/ProductList';
import ArticleHeader from 'src/components/ArticleHeader';
import PageSchema from '../../components/PageSchema';
import OGTags from '../../components/OGTags';

const FeatureArticle = (props: FeatureArticleProps) => {
  const {
    data: {
      page,
      galleryArticles: { nodes: galleryNodes },
      featureArticles: { nodes: featureNodes },
      howToArticles: { nodes: howToNodes },
      brandInfo,
      genericLabels,
      sectionTitles,
    },
  } = props;

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
      <PageSchema
        type={'Article'}
        name={page.headline}
        description={page.subheading}
        slug={page.path}
        image={{
          url: page.heroImage.asset.url,
          width: page.heroImage.asset.metadata.dimensions.width,
          height: page.heroImage.asset.metadata.dimensions.height,
        }}
        data={page}
      />
      <OGTags type={'article'} slug={page.path} data={page} />
      <Breadcrumb tag={page.tags[0]} pageTitle={page.headline} />
      <Container maxWidth="lg">
        <Grid container spacing={2}>
          <Grid item xs={12} sm={7}>
            <ArticleHeader
              article={page}
              type={'feature'}
              socialLinks={brandInfo}
              playLabel={genericLabels.play}
            />
            {page.toolList && (
              <ToolList data={page.toolList} title={sectionTitles.toolName} />
            )}
            {page.productList && (
              <ProductList
                data={page.productList}
                title={sectionTitles.productName}
              />
            )}
            {page._rawFeatureBody && <RichText data={page._rawFeatureBody} />}
            {page.readnext && (
              <ReadNext data={page} title={sectionTitles.nextRead} />
            )}
          </Grid>
          <Grid item xs={12} sm={1}></Grid>
          <Grid item xs={12} sm={4}>
            {relatedArticles.length !== 0 && (
              <RelatedArticles
                articles={relatedArticles}
                title={sectionTitles.relatedArticlesName}
              />
            )}
          </Grid>
        </Grid>
        <Tags data={page.tags} title={sectionTitles.relatedTopicsName} />
      </Container>
    </Layout>
  );
};

export default FeatureArticle;

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
    page: sanityFeatureArticle(slug: { current: { eq: $slug } }) {
      ...FeatureFieldsFull
    }
    brandInfo: sanityBrandInfo {
      pinteresturl
      twitterurl
      youtubeurl
      facebookurl
      instaurl
    }
    genericLabels: sanityGlobalLabels {
      play
    }
    sectionTitles: sanityHowToTemplate {
      name
      nextRead
      productName
      relatedArticlesName
      relatedTopicsName
      toolName
    }
  }
`;

interface FeatureArticleProps {
  data: {
    page: any;
    galleryArticles: any;
    featureArticles: any;
    howToArticles: any;
    brandInfo: any;
    genericLabels: any;
    sectionTitles: any;
  };
  pageContext: {
    slug: string;
    title: string;
  };
}
