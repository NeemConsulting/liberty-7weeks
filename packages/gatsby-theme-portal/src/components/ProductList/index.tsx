import React, { FunctionComponent } from 'react';
import { Link } from 'gatsby';
import Img from 'gatsby-image';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles(theme => ({
  section: {
    marginTop: 30,
    marginBottom: 30,
    position: 'relative',
    '&:before': {
      content: '""',
      background: '#f8e6de',
      position: 'absolute',
      right: 0,
      bottom: 0,
      width: '100vw',
      height: 10,
      zIndex: -1,
    },
  },
  sectionTitle: {
    fontSize: '1.875rem',
    fontWeight: 600,
    lineHeight: 1.1,
    position: 'relative',
    margin: 0,
    marginBottom: 30,
    '&:before': {
      content: '""',
      background: '#f8e6de',
      position: 'absolute',
      right: 0,
      top: 0,
      width: '100vw',
      height: 20,
      zIndex: -1,
    },
  },
  productTitle: {
    fontSize: '.875rem',
    fontWeight: 600,
    lineHeight: 1.4,
    margin: 0,
    marginTop: 8,
    textAlign: 'center',
  },
  image: {
    maxWidth: 140,
    maxHeight: 140,
    margin: 'auto',
  },
  gridContainer: {
    paddingBottom: 10,
  },
  gridItem: {
    padding: 0,
    marginBottom: 20,
  },
}));

const ProductList: FunctionComponent<ProductListInterface> = ({ data }) => {
  const classes = useStyles();
  return (
    <section className={classes.section}>
      <h2 className={classes.sectionTitle}>Products</h2>
      <Grid className={classes.gridContainer} container spacing={2}>
        {data.map(product => (
          <Grid
            className={classes.gridItem}
            item
            xs={4}
            key={product.productName}
          >
            {product.productImage && (
              <Img
                className={classes.image}
                fluid={product.productImage.asset.fluid}
                alt=""
              />
            )}
            <h3 className={classes.productTitle}>{product.productName}</h3>
          </Grid>
        ))}
      </Grid>
    </section>
  );
};

interface ProductListInterface {
  data: any;
}
export default ProductList;
