import React, { FunctionComponent } from 'react';
import Img from 'gatsby-image';
import { Link } from 'gatsby';
import Grid from '@material-ui/core/Grid';
import useStyles from './styles';

const ProductList: FunctionComponent<ProductListInterface> = ({
  data,
  title,
}) => {
  const classes = useStyles();
  return (
    <section className={classes.section}>
      <h2 className={classes.sectionTitle}>{title}</h2>
      <Grid className={classes.gridContainer} container spacing={2}>
        {data.map(product => (
          <Grid className={classes.gridItem} item xs={4} key={product.name}>
            <Link to={product.path}>
              {product.image && (
                <Img
                  className={classes.image}
                  fluid={product.image.asset.fluid}
                  alt={product.image.alt}
                />
              )}
              <h3 className={classes.productTitle}>
                <span>{product.name}</span>
              </h3>
            </Link>
          </Grid>
        ))}
      </Grid>
    </section>
  );
};

interface ProductListInterface {
  data: any;
  title: string;
}
export default ProductList;
