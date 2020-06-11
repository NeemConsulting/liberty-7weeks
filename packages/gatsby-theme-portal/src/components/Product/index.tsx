import React, { FunctionComponent, useState } from 'react';
import { Link } from 'gatsby';
import Img from 'gatsby-image';

import { ReactComponent as IconBuy } from '../../images/icons/buy.svg';

import useStyles from './styles';

const Product: FunctionComponent<ProductInterface> = ({ metadata, image }) => {
  const {
    slug,
    image: { alt },
    buyNow,
    tagLine,
    name,
  } = metadata;
  const classes = useStyles();

  return (
    <div className={classes.wrapper}>
      <Link className={classes.link} to={(slug && slug.current) || '/'}>
        <div className={classes.image}>
          <figure>
            <Img fluid={image} alt={alt} />
          </figure>
        </div>
        {tagLine && (
          <p className={classes.tagline}>
            <span>{tagLine}</span>
          </p>
        )}
        {name && (
          <h3 className={classes.name}>
            <span>{name}</span>
          </h3>
        )}
      </Link>
      {buyNow && (
        <a
          className={classes.buynow}
          href={buyNow}
          target="_blank"
          rel="noopener noreferrer"
        >
          <span className={classes.animateIcon}>
            <IconBuy />
            <span>Buy Now</span>
          </span>
        </a>
      )}
    </div>
  );
};

interface ProductInterface {
  metadata: any;
  image: any;
}
export default Product;
