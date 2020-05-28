import React, { FunctionComponent } from 'react';
import Container from '@material-ui/core/Container';
import { SanityVideoBlockInterface } from './models';
import { makeStyles } from '@material-ui/core/styles';
import BlockContent from '@sanity/block-content-to-react';
import { blockTypeDefaultSerializers } from '../../helpers/sanity';
import { getYouTubeId } from '../../helpers/youtube';

import Styles from './styles';
import { Typography } from '@material-ui/core';
const useStyles = makeStyles(Styles);

const SanityVideoBlock: FunctionComponent<SanityVideoBlockInterface> = ({
  name,
  videoBlock,
  _rawTextBlockBody,
}) => {
  const classes = useStyles();

  return (
    <section className={classes.section}>
      <Container>
        <div className={classes.content}>
          <iframe
            width="560"
            height="315"
            src={`https://www.youtube.com/embed/${getYouTubeId(
              videoBlock.url
            )}`}
            frameBorder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
          <div className={classes.copyText}>
            <Typography variant="h2" className={classes.sectionTitle}>
              {videoBlockName}
            </Typography>
            {_rawTextBlockBody && (
              <BlockContent
                serializers={blockTypeDefaultSerializers}
                blocks={_rawTextBlockBody}
              />
            )}
          </div>
        </div>
      </Container>
    </section>
  );
};

export default SanityVideoBlock;
