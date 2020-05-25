import React, { FunctionComponent } from 'react';
import Container from '@material-ui/core/Container';
import { SanityVideoBlockInterface } from './models';
import { makeStyles } from '@material-ui/core/styles';
import BlockContent from '@sanity/block-content-to-react';
import { blockTypeDefaultSerializers } from '../../helpers/sanity';
import { getYouTubeId } from '../../helpers/youtube';

const useStyles = makeStyles(theme => ({
  section: {
    backgroundColor: '#fed760',
    paddingTop: 32,
    paddingBottom: 32,
    [theme.breakpoints.up('md')]: {
      paddingTop: 48,
      paddingBottom: 48,
    },
  },
  sectionTitle: {
    fontSize: '1.375rem',
    fontWeight: 600,
    marginBottom: 10,
    [theme.breakpoints.up('md')]: {
      fontSize: '2.5rem',
      marginBottom: 20,
    },
  },
  content: {
    display: 'flex',
    flexDirection: 'column',
    [theme.breakpoints.up('md')]: {
      flexDirection: 'row',
    },
    '& iframe': {
      [theme.breakpoints.up('md')]: {
        order: 2,
        height: 380,
      },
    },
  },
  copyText: {
    padding: 18,
    background: theme.palette.common.white,
    order: 2,
    [theme.breakpoints.up('md')]: {
      order: 1,
      alignSelf: 'center',
      padding: 24,
      position: 'relative',
      right: -20,
    },
    '& p': {
      margin: 0,
      fontSize: '1.125rem',
    },
  },
}));

const SanityVideoBlock: FunctionComponent<SanityVideoBlockInterface> = ({
  videoBlockName,
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
            <h2 className={classes.sectionTitle}>{videoBlockName}</h2>
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
