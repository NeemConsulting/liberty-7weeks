import React, { FunctionComponent } from 'react';
import { Link } from 'gatsby';
import Img from 'gatsby-image';
import classNames from 'classnames';
import Container from '@material-ui/core/Container';

import { Typography } from '@material-ui/core';
import BlockContent from '@sanity/block-content-to-react';
import { ImageBlockInterface } from './models';
import { blockTypeDefaultSerializers } from '../../helpers/sanity';

import useStyles from './styles';

const ImageBlock: FunctionComponent<ImageBlockInterface> = ({
  name,
  image,
  _rawTextBlockBody,
  url,
  imageBlockType,
  preferPerformance = false,
}) => {
  const classes = useStyles();
  const getComponentvariant = type => {
    return type
      .replace(/\s/g, '')
      .trim()
      .toLowerCase();
  };
  const Image = preferPerformance ? (
    <img
      srcSet={image.asset.localFile.childImageSharp.fluid.srcSet}
      sizes="(max-width: 959px) 400px, 800px"
      src={image.asset.localFile.childImageSharp.fluid.src}
      alt={image.alt}
    />
  ) : (
    <Img
      fluid={image.asset.fluid}
      alt={image.alt}
      imgStyle={{ height: '422px' }}
    />
  );

  return (
    <section
      className={classNames(
        classes.section,
        getComponentvariant(imageBlockType.name)
      )}
    >
      <Container>
        <Link to={url || '/'} className={classes.link}>
          <div className={classes.content}>
            <div
              className={classNames('c-image_wrapper', classes.imageWrapper)}
            >
              {Image}
            </div>
            <div className={classNames('c-image_text', classes.copyText)}>
              <Typography variant="h2" className={classes.sectionTitle}>
                <span>{name}</span>
              </Typography>
              {_rawTextBlockBody && (
                <BlockContent
                  serializers={blockTypeDefaultSerializers}
                  blocks={_rawTextBlockBody}
                />
              )}
            </div>
          </div>
        </Link>
      </Container>
    </section>
  );
};

export default ImageBlock;
