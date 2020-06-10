import React, { FunctionComponent, useState } from 'react';
import Img from 'gatsby-image';
import { Link } from 'gatsby';
import classNames from 'classnames';

import { Typography } from '@material-ui/core';
import Swiper from 'react-id-swiper';
import 'swiper/css/swiper.css';
import { TileSliderInterface } from './models';
import { ReactComponent as Next } from '../../images/icons/next.svg';
import useStyles from './styles';

const TileSlider: FunctionComponent<TileSliderInterface> = ({
  name,
  slides,
  headline,
}) => {
  const [swiper, updateSwiper] = useState(null);
  const [isLastSlide, setIsLastSlide] = useState(false);
  const [isFirstSlide, setIsFirstSlide] = useState(true);
  const classes = useStyles();
  const params = {
    slidesPerView: 4,
    spaceBetween: 30,
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
    return (
      <div key={slide.name}>
        <div>
          <Link className={classes.sliderLink} to={slide.path}>
            {slide.image && (
              <Img fluid={slide.image.asset.fluid} alt={slide.image.alt} />
            )}
            <h3 className={classes.sliderItemCaption}>
              <span>{slide.name}</span>
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
        <Link className={classes.sectionLink} to={'/'}>
          See All
        </Link>
      </div>
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
        {slides.map(slide => renderer(slide))}
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

export default TileSlider;
