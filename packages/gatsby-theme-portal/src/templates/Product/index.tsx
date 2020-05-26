import React from 'react';
import { graphql, Link } from 'gatsby';
import Img from 'gatsby-image';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
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
    padding: 10,
    margin: 10,
    textAlign: 'left',
    color: theme.palette.text.secondary,
  },
}));

const ProductPage = (props: ProductPageProps) => {
  const {
    data: {
      page,
      products: { nodes: productNodes },
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
      <Grid container spacing={2}>
        <Grid item xs={9}>
          <h2>{page.name}</h2>
          <section>
            <div>{page.subheading}</div>
            <Img fluid={page.image.asset.fluid} />
          </section>
        </Grid>
        <Grid item xs={3}>
          {productNodes.map(item => (
            <Paper className={classes.paper} key={item.name + item.id}>
              <Link to={item.slug ? item.slug.current : '/'}>
                {item.name}
              </Link>
            </Paper>
          ))}
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
  }
`;

interface ProductPageProps {
  data: {
    page: any;
    products: any;
  };
  pageContext: {
    slug: string;
    title: string;
  };
}
