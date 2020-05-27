import React, { FunctionComponent } from 'react';
import { Link } from 'gatsby';
import Img from 'gatsby-image';
import classNames from 'classnames';
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';
import BlockContent from '@sanity/block-content-to-react';
import { ImageBlockInterface } from './models';
import { blockTypeDefaultSerializers } from '../../helpers/sanity';

import Styles from './styles';
const useStyles = makeStyles(Styles);

const ImageBlock: FunctionComponent<ImageBlockInterface> = ({
  name,
  image,
  _rawTextBlockBody,
  url,
  imageBlockType,
}) => {
  const classes = useStyles();
  const getComponentvariant = type => {
    return type
      .replace(/\s/g, '')
      .trim()
      .toLowerCase();
  };

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
              <Img
                fluid={image.asset.fluid}
                alt={image.alt}
                imgStyle={{ height: '422px' }}
              />
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
