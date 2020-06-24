import React, { FunctionComponent, useState } from 'react';
import { Link } from 'gatsby';
import Img from 'gatsby-image';
import classNames from 'classnames';

import { Typography } from '@material-ui/core';
import { HeroSliderInterface } from './models';
import Swiper from 'react-id-swiper';
import 'swiper/css/swiper.min.css';
import useStyles from './styles';
import { ReactComponent as Next } from '../../images/icons/next.svg';

const HeroSlider: FunctionComponent<HeroSliderInterface> = ({
  name,
  slides,
  headline,
}) => {
  const [swiper, updateSwiper] = useState(null);
  const [isLastSlide, setIsLastSlide] = useState(false);
  const [isFirstSlide, setIsFirstSlide] = useState(true);
  const classes = useStyles();
  const params = {
    threshold: 5,
    slidesPerView: 1,
    spaceBetween: 0,
    paginationClickable: true,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    speed: 700,
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
    <div className={classes.sliderWrapper}>
      <button
        className={classNames(classes.navigationButton, classes.nextButton)}
        type="button"
        onClick={swiperNext}
        disabled={isLastSlide}
      >
        <Next />
        <span className={classes.srOnly}>Next</span>
      </button>
      <Swiper {...params} getSwiper={updateSwiper}>
        {slides.map((slide: any, index: number) => (
          <div key={slide.path}>
            {slide.heroImage &&
              (index ? (
                <Img
                  fluid={slide.heroImage.asset.fluid}
                  alt={slide.heroImage.alt}
                  style={{ maxWidth: 752 }}
                  imgStyle={{ objectPosition: 'top center' }}
                />
              ) : (
                <figure>
                  <picture>
                    <source
                      srcSet={`${slide.heroImage.asset.url}?w=752&h=421&auto=format 1x, ${slide.heroImage.asset.url}?w=752&h=421&auto=format&dpr=2 2x`}
                      media="screen and (min-width: 767px)"
                    />
                    <img
                      src={`${slide.heroImage.asset.url}?w=700&h=392&auto=format`}
                      alt={slide.heroImage.alt}
                      width="752"
                      height="421"
                    />
                  </picture>
                </figure>
              ))}
            <div className={classes.copy}>
              <div className={classes.copyInner}>
                <div className={classes.slideType}>{slide._type}</div>
                <Typography variant="h2" className={classes.heading}>
                  {slide.headline}
                </Typography>
                <Link className={classes.callToAction} to={slide.path}>
                  Go to Article
                </Link>
              </div>
            </div>
          </div>
        ))}
      </Swiper>
      <button
        className={classNames(classes.navigationButton, classes.prevButton)}
        type="button"
        onClick={swiperPrev}
        disabled={isFirstSlide}
      >
        <Next />
        <span className={classes.srOnly}>Prev</span>
      </button>
    </div>
  );
};

export default HeroSlider;
