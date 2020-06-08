import React, { FunctionComponent, useState } from 'react';
import { Preloader, Oval } from 'react-preloader-icon';
import { Link } from 'gatsby';
import classNames from 'classnames';
import SocialMenu from '../SocialMenu';
import { getYouTubeId } from '../../helpers/youtube';
import { ReactComponent as Skill } from '../../images/icons/skill.svg';
import { ReactComponent as Youtube } from '../../images/icons/youtube.svg';
import { ReactComponent as IconTime } from '../../images/icons/time.svg';

import { Typography } from '@material-ui/core';
import useStyles from './styles';

const ArticleHeader: FunctionComponent<ArticleHeaderInterface> = ({
  article,
  type,
  socialLinks,
}) => {
  const classes = useStyles();
  const [showVideo, setShowVideo] = useState(false);
  const [videoSourceUrl, setVideoSourceUrl] = useState('');
  const [videoLoading, setVideoLoading] = useState(false);
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
    setVideoLoading(true);
    setVideoSourceUrl(
      `https://www.youtube.com/embed/${getYouTubeId(
        event.currentTarget.dataset.url
      )}?autoplay=1`
    );
    setShowVideo(true);
  };

  const onFrameLoad = () => {
    setVideoLoading(false);
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
        <SocialMenu links={socialLinks} />
      </div>

      {/* TODO: Use generic `Video` component for hero video to avoid duplicate code  */}
      {!imageGallery && (
        <div className={classes.heroImage}>
          {!showVideo && (
            <img
              className="img-responsive"
              src={heroImage.asset.localFile.childImageSharp.fluid.src}
              alt={heroImage.alt}
            />
          )}
          {!showVideo && heroVideo && !videoLoading && (
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
          {videoLoading && (
            <Preloader
              use={Oval}
              size={60}
              strokeWidth={11}
              strokeColor="#000"
              duration={500}
            />
          )}
          {showVideo && (
            <iframe
              width="560"
              height="399"
              src={videoSourceUrl}
              frameBorder="0"
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              onLoad={onFrameLoad}
            ></iframe>
          )}
        </div>
      )}
      {(skillLevel || time) && (
        <div className={classes.tutorialInfo}>
          {time && (
            <div className={classes.tutorialInfoBlock}>
              <div className={classes.info}>
                <strong>Time</strong>
                <span>{time} mins</span>
              </div>
              <div className={classes.icon}>
                <IconTime className={'active'} />
              </div>
            </div>
          )}
          {skillLevel && (
            <div className={classes.tutorialInfoBlock}>
              <div className={classes.info}>
                <strong>Skill</strong>
                <span>{skillLevel}</span>
              </div>
              <div className={classNames('b-skill', classes.icon)}>
                <Skill
                  className={classNames(skillLevel === 'easy' && 'active')}
                />
                <Skill
                  className={classNames(skillLevel === 'medium' && 'active')}
                />
                <Skill
                  className={classNames(skillLevel === 'difficult' && 'active')}
                />
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
  socialLinks: any;
}

export default ArticleHeader;
