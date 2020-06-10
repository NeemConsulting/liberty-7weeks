import React, { FunctionComponent } from 'react';
import { Link } from 'gatsby';
import Img from 'gatsby-image';

import useStyles from './styles';

const ReadNext: FunctionComponent<ReadNextInterface> = ({ data }) => {
  const classes = useStyles();
  return (
    <section className={classes.readNext}>
      <h3 className={classes.readNextTitle}>Next Read</h3>
      <div className={classes.readNextContent}>
        <Link className={classes.readNextLink} to={data.readnext.path}>
          <div className={classes.readNextImage}>
            <Img
              fluid={data.readnext.heroImage.asset.fluid}
              alt={data.readnext.heroImage.alt}
            />
          </div>
          <div className={classes.readNextCopy}>
            <span className={classes.readNextCopyType}>
              {data.readnext._type}
            </span>
            <h3 className={classes.readNextCopyTitle}>
              <span>{data.readnext.headline}</span>
            </h3>
          </div>
        </Link>
      </div>
    </section>
  );
};

interface ReadNextInterface {
  data: any;
}
export default ReadNext;
