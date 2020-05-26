import React, { FunctionComponent, useState } from 'react';
import { Link } from 'gatsby';
import Img from 'gatsby-image';
import classNames from 'classnames';
import { makeStyles } from '@material-ui/core/styles';
import SocialMenu from '../SocialMenu';
import { getYouTubeId } from '../../helpers/youtube';
import { ReactComponent as Skill } from '../../images/icons/skill.svg';
import { ReactComponent as Youtube } from '../../images/icons/youtube.svg';

const useStyles = makeStyles(theme => ({
  header: {
    margin: 'auto',
    maxWidth: 750,
    [theme.breakpoints.up('md')]: {
      margin: '16px auto',
    },
    '& svg': {
      width: 28,
      height: 28,
      fill: theme.palette.common.black,
    },
  },
  headingPrimary: {
    fontSize: '1.875rem',
    fontWeight: 600,
    margin: 0,
    marginBottom: 10,
    [theme.breakpoints.up('md')]: {
      fontSize: '2.875rem',
      marginBottom: 15,
    },
  },
  headingSecondary: {
    fontSize: '2.5rem',
    fontWeight: 600,
    margin: 0,
    marginBottom: 20,
  },
  textSecondary: {
    paddingBottom: 10,
    fontSize: '.875rem',
    margin: 0,
    marginBottom: 10,
    [theme.breakpoints.up('md')]: {
      fontSize: '1.125rem',
      marginBottom: 16,
    },
  },
  articleInfo: {
    fontSize: '.875rem',
    fontWeight: 400,
    maxWidth: 750,
    marginBottom: 15,
    display: 'flex',

    [theme.breakpoints.up('md')]: {
      marginBottom: 0,
    },
  },
  articleAuthor: {},
  articleDate: {},
  divider: {
    margin: '0 10px',
  },
  articleInfoWrapper: {
    display: 'flex',
    flexDirection: 'column',
    [theme.breakpoints.up('md')]: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
    },
  },
  heroImage: {
    marginTop: 10,
    position: 'relative',
    '& iframe': {
      height: 263,
      [theme.breakpoints.up('md')]: {
        height: 399,
      },
    },
  },
  iconVideo: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translateX(-50%) translateY(-50%)',
    border: 0,
    cursor: 'pointer',
    backgroundColor: 'transparent',
    '& svg': {
      transition: 'all .5s',
      fill: '#fff',
      width: 60,
      height: 60,
      cursor: 'pointer',
    },
    '&:hover': {
      '& svg': {
        fill: '#ff3366',
        transform: 'scale(1.2)',
      },
    },
  },
  textCenter: {
    textAlign: 'center',
  },
  link: {
    backgroundImage: 'linear-gradient(120deg,#ff3366 0%,#ff3366 100%)',
    backgroundRepeat: 'no-repeat',
    backgroundSize: '100% 3px',
    backgroundPosition: '0 100%',
    color: theme.palette.common.black,
    lineHeight: 1.75,
    textDecoration: 'none',
    display: 'flex',
  },
  tutorialInfo: {
    display: 'flex',
    marginTop: 16,
    marginBottom: 16,
    width: '100%',
  },
  tutorialInfoBlock: {
    backgroundColor: '#f4f4f4',
    padding: '10px 16px',
    fontSize: '.75rem',
    lineHeight: 1.1,
    letterSpacing: 1,
    marginRight: 20,
    flex: '1 50%',
    '&:last-child': {
      marginRight: 0,
    },
    '& strong': {
      display: 'block',
      marginBottom: 8,
      textTransform: 'uppercase',
    },
    '& span': {
      textTransform: 'capitalize',
    },
  },
  flex: {
    display: 'flex',
    alignItems: 'center',
    '& span': {
      marginLeft: 20,
    },
    '& svg': {
      marginRight: 10,
      opacity: 0.2,
      '&.active': {
        opacity: 1,
      },
    },
  },
  authorInfo: {
    display: 'flex',
    '& .gatsby-image-wrapper': {
      width: 25,
      height: 25,
      borderRadius: '50%',
      border: '2px solid #ff3366',
      marginRight: 10,
    },
    '& picture img': {
      width: '25px !important',
      height: '25px !important',
      objectFit: 'contain !important',
    },
  },
}));

const ArticleHeader: FunctionComponent<ArticleHeaderInterface> = ({
  article,
  type,
}) => {
  const classes = useStyles();
  const [showVideo, setShowVideo] = useState(false);
  const [videoSourceUrl, setVideoSourceUrl] = useState('');
  const {
    headline,
    subheading,
    imageGallery,
    heroImage,
    heroVideo,
    author,
    skillLevel,
    time,
  } = article;

  const playVideo = (event: any) => {
    setShowVideo(true);
    setVideoSourceUrl(
      `https://www.youtube.com/embed/${getYouTubeId(
        event.currentTarget.dataset.url
      )}?autoplay=1`
    );
  };

  return (
    <div className={classes.header}>
      <h2
        className={classNames(
          classes.headingPrimary,
          type === 'gallery' ? classes.textCenter : null
        )}
      >
        {headline}
      </h2>
      <p
        className={classNames(
          classes.textSecondary,
          type === 'gallery' ? classes.textCenter : null
        )}
      >
        {subheading}
      </p>
      <div className={classes.articleInfoWrapper}>
        <div className={classes.articleInfo}>
          {author && author.name && (
            <div className={classes.authorInfo}>
              {author.image && (
                <Img fluid={author.image.asset.fluid} alt={author.image.alt} />
              )}
              <Link
                className={classes.link}
                to={author.slug ? `/${author.slug.current}` : `/${author.name}`}
              >
                <span>{author.name}</span>
              </Link>

              <span className={classes.divider}>|</span>
            </div>
          )}
          {(article.publishedAt || article._updatedAt) && (
            <span className={classes.articleDate}>
              {article.publishedAt || article._updatedAt}
            </span>
          )}
        </div>
        <SocialMenu />
      </div>
      {!imageGallery && (
        <div className={classes.heroImage}>
          {!showVideo && (
            <Img className="img-responsive" fluid={heroImage.asset.fluid} />
          )}
          {!showVideo && heroVideo && (
            <button
              type="button"
              className={classes.iconVideo}
              onClick={playVideo}
              data-url={heroVideo.url}
            >
              <Youtube />
              <span hidden>Play Video</span>
            </button>
          )}
          {showVideo && (
            <iframe
              width="560"
              height="399"
              src={videoSourceUrl}
              frameBorder="0"
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          )}
        </div>
      )}
      {(skillLevel || time) && (
        <div className={classes.tutorialInfo}>
          {time && (
            <div className={classes.tutorialInfoBlock}>
              <strong>Time</strong>
              <span>{time}</span>
            </div>
          )}
          {skillLevel && (
            <div className={classes.tutorialInfoBlock}>
              <strong>Skill</strong>
              <div className={classes.flex}>
                <div>
                  <Skill
                    className={classNames(skillLevel === 'easy' && 'active')}
                  />
                  <Skill
                    className={classNames(skillLevel === 'medium' && 'active')}
                  />
                  <Skill
                    className={classNames(
                      skillLevel === 'difficult' && 'active'
                    )}
                  />
                </div>
                <span>{skillLevel}</span>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

interface ArticleHeaderInterface {
  article: any;
  type: any;
}

export default ArticleHeader;
