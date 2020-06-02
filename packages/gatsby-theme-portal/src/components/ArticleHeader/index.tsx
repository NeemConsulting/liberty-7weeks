import React, { FunctionComponent, useState } from 'react';
import { Link } from 'gatsby';
import Img from 'gatsby-image';
import classNames from 'classnames';
import { makeStyles } from '@material-ui/core/styles';
import SocialMenu from '../SocialMenu';
import { getYouTubeId } from '../../helpers/youtube';
import { ReactComponent as Skill } from '../../images/icons/skill.svg';
import { ReactComponent as Youtube } from '../../images/icons/youtube.svg';

import Styles from './styles';
const useStyles = makeStyles(Styles);
import { Typography } from '@material-ui/core';

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
      <Typography
        variant="h1"
        className={classNames(
          classes.headingPrimary,
          type === 'gallery' ? classes.textCenter : null
        )}
      >
        {headline}
      </Typography>
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
          {!showVideo && <img src={heroImage.asset.url} alt="" />}
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
