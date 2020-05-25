import React, { FunctionComponent } from 'react';
import { Link } from 'gatsby';
import Img from 'gatsby-image';
import classNames from 'classnames';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  teaserWrapper: {
    marginTop: 30,
    [theme.breakpoints.up('md')]: {
      marginTop: 20,
    },
  },
  teaser: {
    marginBottom: 16,
    textAlign: 'left',
    color: theme.palette.text.secondary,
    position: 'relative',
  },
  teaserFirst: {
    marginBottom: 24,
    '& .gatsby-image-wrapper': {
      width: '100%',
      height: 206,
      marginRight: 0,
    },
    '& a > div': {
      flexDirection: 'column',
    },
    '& h3': {
      fontSize: '.875rem',
      fontWeight: 600,
      lineHeight: 1.3,
      marginTop: 5,
      [theme.breakpoints.up('md')]: {
        fontSize: '1.125rem',
      },
    },
    '& div > span': {
      position: 'absolute',
      top: 0,
      backgroundColor: theme.palette.common.white,
      color: '#2c5270',
      fontSize: '.75rem',
      fontWeight: 600,
      letterSpacing: 1,
      marginTop: 0,
      padding: '3px 6px',
      [theme.breakpoints.up('md')]: {
        padding: 6,
      },
    },
  },
  teaserImage: {
    width: 80,
    height: 80,
    marginRight: 15,
    minWidth: 80,
  },
  teaserLink: {
    fontSize: '1rem',
    textDecoration: 'none',
    color: theme.palette.common.black,
    margin: 0,
    display: 'block',
    '&:hover h3': {
      '& span': {
        backgroundImage: 'linear-gradient(120deg,#b8f0c0 0%,#b8f0c0 100%)',
        backgroundRepeat: 'no-repeat',
        backgroundSize: '100% .1875rem',
        backgroundPosition: '0 100%',
      },
    },
  },
  teaserType: {
    marginTop: 5,
    marginBottom: 5,
    display: 'block',
    textTransform: 'uppercase',
    color: '#2c5270',
    fontSize: '.625rem',
    fontWeight: 600,
    lineHeight: 1.1,
    letterSpacing: 1,
    [theme.breakpoints.up('md')]: {
      fontSize: '.75rem',
    },
  },
  teaserTitle: {
    fontSize: '.875rem',
    fontWeight: 400,
    lineHeight: 1.1,
    margin: 0,
    [theme.breakpoints.up('md')]: {
      fontSize: '1.125rem',
      lineHeight: 1.3,
      marginTop: 8,
    },
  },
  flexBox: {
    display: 'flex',
    alignItems: 'stretch',
  },
  title: {
    fontSize: '1.375rem',
    lineHeight: 1.1,
    fontWeight: 600,
    margin: 0,
    marginBottom: 20,
    paddingTop: 8,
    position: 'relative',
    '&:before': {
      content: '""',
      background: '#b8f0c0',
      position: 'absolute',
      left: 0,
      top: 0,
      width: '100vw',
      height: 20,
      zIndex: -1,
    },
    [theme.breakpoints.up('md')]: {
      fontSize: '1.875rem',
      paddingTop: 5,
    },
  },
}));

const RelatedArticles: FunctionComponent<RelatedArticlesInterface> = ({
  articles,
}) => {
  const classes = useStyles();
  return (
    <div className={classes.teaserWrapper}>
      <h4 className={classes.title}>Related Articles</h4>
      {articles.map((article: any, index: any) => (
        <div
          className={classNames(
            classes.teaser,
            index === 0 ? classes.teaserFirst : null
          )}
          key={article.id}
        >
          <Link to={article.slug.current} className={classes.teaserLink}>
            <div className={classes.flexBox}>
              <Img
                fluid={article.heroImage.asset.fluid}
                className={classes.teaserImage}
                alt={article.heroImage.alt}
              ></Img>
              <div>
                <span className={classes.teaserType}>{article._type}</span>
                <h3 className={classes.teaserTitle}>
                  <span>{article.headline}</span>
                </h3>
              </div>
            </div>
          </Link>
        </div>
      ))}
    </div>
  );
};

interface RelatedArticlesInterface {
  articles: any;
}

export default RelatedArticles;
