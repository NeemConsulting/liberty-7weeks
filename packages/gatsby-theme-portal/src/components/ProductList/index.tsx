import React, { FunctionComponent } from 'react';
import Img from 'gatsby-image';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

import Styles from './styles';
const useStyles = makeStyles(Styles);

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
            key={product.name}
          >
            {product.image && (
              <Img
                className={classes.image}
                fluid={product.image.asset.fluid}
                alt=""
              />
            )}
            <h3 className={classes.productTitle}>{product.name}</h3>
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
