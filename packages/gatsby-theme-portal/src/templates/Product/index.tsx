import React from 'react';
import { graphql, Link } from 'gatsby';
import Img from 'gatsby-image';
import { makeStyles } from '@material-ui/core/styles';
import OGTags from '../../components/OGTags';
import Breadcrumb from '../../components/Breadcrumb';
import TileSlider from '../../components/TileSlider';
import Tags from '../../components/Tags';
import SanityArticleSlider from '../../components/SanityArticleSlider';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
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
  callToAction: {
    fontSize: '.875rem',
    fontWeight: 700,
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
    paddingTop: theme.spacing(1.25),
    paddingBottom: theme.spacing(1.25),
    paddingLeft: theme.spacing(1),
    paddingRight: theme.spacing(1),
    display: 'inline-block',
    textDecoration: 'none',
    position: 'relative',
    transition: 'all .3s ease-out',
    transform: 'perspective(1px) translateZ(0)',
    '&:before': {
      content: '""',
      position: 'absolute',
      zIndex: -1,
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      background: theme.palette.common.black,
      transform: 'scaleX(0)',
      transformOrigin: '0 50%',
      transitionProperty: 'transform',
      transitionDuration: '0.3s',
      transitionTimingFunction: 'ease-out',
    },
    '&:hover': {
      color: theme.palette.common.white,
      '&:before': {
        transform: 'scaleX(1)',
      },
    },
    [theme.breakpoints.up('md')]: {
      fontSize: '1.125rem',
      paddingTop: theme.spacing(1.75),
      paddingBottom: theme.spacing(1.75),
      paddingLeft: theme.spacing(2.5),
      paddingRight: theme.spacing(2.5),
    },
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
}));

const ProductPage = (props: ProductPageProps) => {
  const {
    data: {
      page,
      products: { nodes: productNodes },
      articles: { nodes: articlesList },
      tags: { nodes: tagsList },
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
      <Grid container spacing={2}>
        <Grid item xs={5}>
          <Container>
            <section>
              <Img fluid={page.image.asset.fluid} alt={page.image.alt} />
            </section>
          </Container>
        </Grid>
        <Grid item xs={7}>
          <Container>
            <h1>{page.name}</h1>
            <Link className={classes.callToAction} to={page.learnMore}>
              See the benefits
            </Link>
            {/* <p>{page._rawMarketingDescription[0].children[0].text}</p>
            <p>{page._rawMarketingDescription[1].children[0].text}</p> */}
          </Container>
        </Grid>
        <Grid item xs={12}>
          <Container>
            <TileSlider
              name="Products"
              slides={productNodes}
              headline="Product you may like"
            />
          </Container>
        </Grid>
        <Grid item xs={12}>
          <section>
            <SanityArticleSlider
              name="articles"
              slides={articlesList}
              headline="Our Tips & Advice"
              slideType={{ name: 'tile' }}
            />
          </section>
        </Grid>
        <Grid item xs={12}>
          <Container>{tagsList && <Tags data={tagsList} />}</Container>
        </Grid>
      </Grid>
    </Layout>
  );
};

export default ProductPage;

export const query = graphql`
  query($slug: String!) {
    products: allSanityProduct {
      nodes {
        ...ProductFieldsTile
      }
    }
    page: sanityProduct(id: { eq: $slug }) {
      ...ProductFieldsFull
    }
    articles: allSanityHowToArticle {
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
  }
`;

interface ProductPageProps {
  data: {
    page: any;
    products: any;
    articles: any;
    tags: any;
  };
  pageContext: {
    slug: string;
    title: string;
  };
}
