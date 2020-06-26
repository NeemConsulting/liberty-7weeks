import React from 'react';
import { graphql } from 'gatsby';
import Img from 'gatsby-image';
import { makeStyles } from '@material-ui/core/styles';
import OGTags from '../../components/OGTags';
import Breadcrumb from '../../components/Breadcrumb';
import TileSlider from '../../components/TileSlider';
import ImageBlock from '../../components/ImageBlock';
import SocialMenu from '../../components/SocialMenu';
import Button from '../../components/Common/Button';
import BlockContent from '@sanity/block-content-to-react';
import { blockTypeDefaultSerializers } from '../../helpers/sanity';
import Tags from '../../components/Tags';
import SanityArticleSlider from '../../components/SanityArticleSlider';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import SEO from '../../components/Seo';
import Layout from '../../components/Layout';

const useStyles = makeStyles(theme => ({
  mainGrid: {
    marginTop: theme.spacing(10),
  },
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(1.25),
    margin: theme.spacing(1.25),
    textAlign: 'left',
    color: theme.palette.text.secondary,
  },
  carouselArrow: {
    position: 'absolute',
    zIndex: 2,
    top: 'calc(50% - 50px)',
    width: 77,
    height: 77,
    cursor: 'pointer',
    backgroundColor: 'transparent',
    border: 'none',
  },
  socialWrapper: {
    '& svg': {
      fill: 'black',
    },
  },
}));

const ProductPage = (props: ProductPageProps) => {
  const {
    data: {
      page,
      products: { nodes: productNodes },
      articles: { nodes: articlesList },
      brandInfo,
      imageBlock,
    },
  } = props;

  const classes = useStyles();

  page.seo = page.seo || {};

  return (
    <Layout>
      <SEO
        lang={'tl-ph'}
        title={page.seo.metaTitle}
        description={page.seo.metaDescription}
        keywords={page.seo.metaKeywords}
      />
      <OGTags type={'page'} slug={page.path} data={page} />
      {page.path !== '/' && <Breadcrumb pageTitle={page.name} />}
      <Grid container>
        <Grid item xs={12}>
          <Container>
            <Grid container>
              <Grid item lg={5} md={5} xs={12}>
                <Img fluid={page.image.asset.fluid} alt={page.image.alt} />
              </Grid>
              <Grid item lg={7} md={7} xs={12}>
                <h1>{page.name}</h1>
                <Button lable="Buy Now" link={page.buyNow} />
                <Grid container spacing={2}>
                  <Grid
                    item
                    lg={6}
                    md={6}
                    xs={12}
                    className={classes.socialWrapper}
                  >
                    <BlockContent
                      blocks={page._rawMarketingDescription}
                      serializers={blockTypeDefaultSerializers}
                    />
                    <SocialMenu links={brandInfo} />
                  </Grid>
                  <Grid item lg={6} md={6} xs={12}>
                    <BlockContent
                      blocks={page._rawUsageDetails}
                      serializers={blockTypeDefaultSerializers}
                    />
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Container>
        </Grid>
        <Grid item xs={12} className={classes.mainGrid}>
          <Container>
            {productNodes.length > 0 && (
              <TileSlider
                name="Products"
                slides={productNodes}
                headline="Products You Might Also Like"
                seeAllLink="product-showcase"
              />
            )}
          </Container>
        </Grid>
        <Grid item xs={12}>
          <ImageBlock
            id={imageBlock._id}
            name={imageBlock.name}
            image={imageBlock.image}
            _rawTextBlockBody={imageBlock._rawTextBlockBody}
            url={imageBlock.url}
            imageBlockType={imageBlock.imageBlockType}
          />
        </Grid>
        <Grid item xs={12}>
          {articlesList.length > 0 && (
            <SanityArticleSlider
              name="articles"
              slides={articlesList}
              headline="Our Tips & Advice"
              slideType={{ name: 'tile' }}
            />
          )}
        </Grid>
        <Grid item xs={12}>
          <Container>{page.tags && <Tags data={page.tags} />}</Container>
        </Grid>
      </Grid>
    </Layout>
  );
};

export default ProductPage;

export const query = graphql`
  query($slug: String!, $tags: [String!]) {
    products: allSanityProduct(
      filter: {
        tags: { elemMatch: { name: { in: $tags } } }
        id: { nin: [$slug] }
      }
    ) {
      nodes {
        ...ProductFieldsTile
      }
    }

    page: sanityProduct(id: { eq: $slug }) {
      ...ProductFieldsFull
      tags {
        name
        tagCategory {
          name
        }
      }
    }
    articles: allSanityHowToArticle(
      filter: {
        tags: { elemMatch: { name: { in: $tags } } }
        id: { nin: [$slug] }
      }
      limit: 10
      sort: { fields: _createdAt, order: DESC }
    ) {
      nodes {
        ...HowToFieldsTile
      }
    }
    tags: allSanityTag(limit: 6) {
      nodes {
        id
        tagCategory {
          id
          name
        }
        name
      }
    }
    imageBlock: sanityImageBlock {
      id
      name
      image {
        asset {
          fluid {
            base64
            aspectRatio
            src
            srcSet
            srcWebp
            srcSetWebp
            sizes
          }
        }
      }
      _rawTextBlockBody
      url
      imageBlockType {
        id
        name
      }
    }
    brandInfo: sanityBrandInfo {
      pinteresturl
      twitterurl
      youtubeurl
      facebookurl
      instaurl
    }
  }
`;

interface ProductPageProps {
  data: {
    page: any;
    products: any;
    articles: any;
    brandInfo: any;
    imageBlock: any;
  };
  pageContext: {
    slug: string;
    title: string;
  };
}
