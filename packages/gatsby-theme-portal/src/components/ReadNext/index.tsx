import React, { FunctionComponent } from 'react';
import { Link } from 'gatsby';
import Img from 'gatsby-image';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  readNext: {
    marginTop: 30,
  },
  readNextTitle: {
    position: 'relative',
    fontSize: '.875rem',
    fontWeight: 600,
    lineHeight: 1.1,
    margin: 0,

    [theme.breakpoints.up('md')]: {
      fontSize: '1.125rem',
    },

    '&:before': {
      content: '""',
      height: 10,
      width: 80,
      position: 'absolute',
      zIndex: -1,
      bottom: 0,
      left: '-.625rem',
      background: '#b8f0c0',
    },
  },
  readNextContent: {
    marginTop: 16,
    position: 'relative',
    '&:before': {
      content: '""',
      background: '#b8f0c0',
      position: 'absolute',
      height: '100%',
      right: 0,
      top: 0,
      width: '100vw',
      zIndex: -1,
    },
    [theme.breakpoints.up('md')]: {
      maxHeight: 212,
    },
  },
  readNextImage: {
    overflow: 'hidden',
    [theme.breakpoints.up('md')]: {
      height: '212px',
    },
    '& img': {
      [theme.breakpoints.up('md')]: {
        maxWidth: 350,
        width: '532px !important',
        height: '345px !important',
      },
    },
  },
  readNextLink: {
    color: theme.palette.common.black,
    display: 'block',
    textDecoration: 'none',
    fontSize: '1.875rem',
    fontWeight: 600,
    paddingTop: 10,
    paddingRight: 10,
    [theme.breakpoints.up('md')]: {
      padding: 0,
    },
  },
  readNextCopy: {
    backgroundColor: theme.palette.common.white,
    padding: '10px 20px',
    [theme.breakpoints.up('md')]: {
      position: 'absolute',
      maxWidth: 350,
      right: 20,
      top: 20,
    },
  },
  readNextCopyTitle: {
    fontSize: '1.25rem',
    fontWeight: 600,
    lineHeight: 1.2,
    margin: 0,
    [theme.breakpoints.up('md')]: {
      fontSize: '1.875rem',
    },
  },
  readNextCopyType: {
    fontSize: '.75rem',
    fontWeight: 600,
    margin: '0 8px 8px 0',
    textTransform: 'uppercase',
    color: '#2c5270',
    display: 'block',
  },
}));

const ReadNext: FunctionComponent<ReadNextInterface> = ({ data }) => {
  const classes = useStyles();
  return (
    <section className={classes.readNext}>
      <h3 className={classes.readNextTitle}>Next Read</h3>
      <div className={classes.readNextContent}>
        <Link className={classes.readNextLink} to={`/${data.slug.current}`}>
          <div className={classes.readNextImage}>
            <Img fluid={data.heroImage.asset.fluid} />
          </div>
          <div className={classes.readNextCopy}>
            <span className={classes.readNextCopyType}>
              {data.readnext._type}
            </span>
            <h3 className={classes.readNextCopyTitle}>
              {data.readnext.headline}
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
