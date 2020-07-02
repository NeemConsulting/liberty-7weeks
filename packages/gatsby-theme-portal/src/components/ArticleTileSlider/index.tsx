import React, { FunctionComponent, useState } from 'react';
import Img from 'gatsby-image';
import { Link } from 'gatsby';
import classNames from 'classnames';
import { makeStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';
import Swiper from 'react-id-swiper';
import 'swiper/css/swiper.css';
import { getSearchUrl } from '../../helpers/searchUrl';
import { ArticleTileSliderInterface } from './models';
import { ReactComponent as PlayVideo } from '../../images/icons/play.svg';
import { ReactComponent as Next } from '../../images/icons/next.svg';
import Styles from './styles';

const useStyles = makeStyles(Styles);

const ArticleTileSlider: FunctionComponent<ArticleTileSliderInterface> = ({
  name,
  slides,
  headline,
  tagName,
  searchResultPath,
}) => {
  console.log('tagName', tagName);
  const [swiper, updateSwiper] = useState(null);
  const [isLastSlide, setIsLastSlide] = useState(false);
  const [isFirstSlide, setIsFirstSlide] = useState(true);
  const classes = useStyles();
  const params = {
    spaceBetween: 20,
    freeMode: true,
    scrollbar: {
      el: '.swiper-scrollbar',
      hide: false,
    },
    breakpoints: {
      768: {
        slidesPerView: 4,
        spaceBetween: 30,
      },
      320: {
        slidesPerView: 2.5,
        spaceBetween: 20,
      },
    },
  };

  const renderer = slide => {
    console.log('articleSlide', slide);
    return (
      <div key={slide.headline}>
        <div>
          <span className={classes.slideType}>{slide._type}</span>
          <Link className={classes.sliderLink} to={slide.path}>
            {slide.heroImage && (
              <div className={classes.heroImage}>
                <Img
                  fluid={{
                    ...slide.heroImage.asset.fluid,
                    sizes:
                      '(max-width: 512px) 25vw, (max-width: 768px) 50vw, (max-width: 1268px) 75vw, (max-width: 1680px) 90vw, 90vw',
                  }}
                  alt={slide.heroImage.alt}
                />
                {slide.heroVideo && (
                  <span className={`icon ${classes.iconPlay}`}>
                    <PlayVideo />
                    <span hidden>Play Video</span>
                  </span>
                )}
              </div>
            )}
            <h3 className={classes.sliderItemCaption}>
              <span>{slide.headline}</span>
            </h3>
          </Link>
        </div>
      </div>
    );
  };

  const swiperNext = () => {
    if (swiper) {
      swiper.slideNext();
      setIsFirstSlide(false);
      if (swiper.isEnd) {
        setIsLastSlide(true);
      }
    }
  };

  const swiperPrev = () => {
    if (swiper) {
      swiper.slidePrev();
      setIsLastSlide(false);
      if (swiper.isBeginning) {
        setIsFirstSlide(true);
      }
    }
  };

  return (
    <div className={classes.slider}>
      <div className={classes.sectionTitle}>
        <Typography variant="h2" className={classes.sliderTitle}>
          {headline}
        </Typography>
        <Link
          className={classes.sectionLink}
          to={getSearchUrl(searchResultPath, tagName, 'tags.name')}
        >
          See All
        </Link>
      </div>
      {slides.length > 3 && (
        <button
          className={classNames(classes.navigationButton, classes.nextButton)}
          type="button"
          onClick={swiperNext}
          disabled={isLastSlide}
        >
          <Next />
          <span className={classes.srOnly}>Next</span>
        </button>
      )}
      <Swiper {...params} getSwiper={updateSwiper}>
        {slides.map(slide => renderer(slide))}
      </Swiper>
      {slides.length > 3 && (
        <button
          className={classNames(classes.navigationButton, classes.prevButton)}
          type="button"
          onClick={swiperPrev}
          disabled={isFirstSlide}
        >
          <Next />
          <span className={classes.srOnly}>Prev</span>
        </button>
      )}
    </div>
  );
};

export default ArticleTileSlider;
