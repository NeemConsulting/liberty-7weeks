import React, { FunctionComponent } from 'react';
import { HeroSliderInterface } from './models';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Img from 'gatsby-image';
import { Link } from 'gatsby';
import Swiper from 'react-id-swiper';
import 'swiper/css/swiper.css';

const useStyles = makeStyles(theme => ({
  sectionTitle: {
    fontSize: '2.5rem',
    fontWeight: 600,
    margin: '0 24px 24px 0',
  },
  sliderWrapper: {
    marginLeft: -16,
    marginRight: -16,
    [theme.breakpoints.up('md')]: {
      // overflow: 'hidden',
      margin: 0,
    },
    '& .swiper-container': {
      overflow: 'visible',
    },
    '& .swiper-slide': {
      height: 422,
      [theme.breakpoints.up('md')]: {
        opacity: 0,
      },
      '&.swiper-slide-active': {
        [theme.breakpoints.up('md')]: {
          opacity: 1,
        },
      },
    },
    '& .swiper-button-prev': {
      transition: 'all .2s',
      color: theme.palette.common.black,
      height: 64,
      marginTop: -32,
      [theme.breakpoints.up('md')]: {
        left: -50,
      },
      '&:hover, &:focus': {
        color: '#FF3366',
        left: 5,
        [theme.breakpoints.up('md')]: {
          left: -60,
        },
      },
      '&:after': {
        height: 64,
        fontSize: '4rem',
      },
    },
    '& .swiper-button-next': {
      transition: 'all .2s',
      color: theme.palette.common.black,
      height: 64,
      marginTop: -32,
      '&:hover, &:focus': {
        color: '#FF3366',
        right: 5,
      },
      '&:after': {
        height: 64,
        fontSize: '4rem',
      },
    },
    '& .swiper-pagination': {
      left: 'auto',
      right: '50%',
      transform: 'translateX(50%)',
      bottom: -35,
      [theme.breakpoints.up('md')]: {
        bottom: -40,
      },
    },
    '& .swiper-pagination-bullet': {
      backgroundColor: '#4a9a93',
      width: 20,
      height: 20,
    },

    '& .swiper-pagination-bullet-active': {
      backgroundColor: theme.palette.common.black,
    },

    '& .gatsby-image-wrapper': {
      maxWidth: 750,
      maxHeight: 422,
      position: 'relative',
      // left: '5%',
    },
    '& picture img': {
      maxWidth: 750,
    },
  },
  copy: {
    backgroundColor: theme.palette.common.white,
    maxWidth: '96%',
    margin: '-15px auto 0',
    zIndex: 1,
    position: 'relative',
    [theme.breakpoints.up('md')]: {
      position: 'absolute',
      top: '50%',
      right: '5%',
      transform: 'translateY(-50%)',
      zIndex: 1,
      maxWidth: 462,
      width: 462,
    },
  },
  heading: {
    fontSize: '1.375rem',
    [theme.breakpoints.up('md')]: {
      fontSize: '2.5rem',
    },
  },
  copyInner: {
    padding: 20,
    [theme.breakpoints.up('md')]: {
      padding: 24,
    },
  },
  callToAction: {
    fontSize: '.875rem',
    fontWeight: 700,
    backgroundColor: '#FF3366',
    color: theme.palette.common.white,
    padding: '10px 16px',
    display: 'inline-block',
    textDecoration: 'none',
    position: 'relative',
    transform: 'perspective(1px) translateZ(0)',
    '&:before': {
      content: '""',
      position: 'absolute',
      zIndex: -1,
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      background: theme.palette.common.black,
      transform: 'scaleX(0)',
      transformOrigin: '0 50%',
      transitionProperty: 'transform',
      transitionDuration: '0.3s',
      transitionTimingFunction: 'ease-out',
    },
    '&:hover:before': {
      transform: 'scaleX(1)',
    },
    [theme.breakpoints.up('md')]: {
      marginTop: 20,
      fontSize: '1.125rem',
      padding: '14px 20px',
    },
  },
  carouselArrow: {
    position: 'absolute',
    zIndex: 2,
    top: 'calc(50% - 50px)',
    width: 77,
    height: 77,
    cursor: 'pointer',
    backgroundColor: 'transparent',
    border: 'none',
  },
}));

const HeroSlider: FunctionComponent<HeroSliderInterface> = ({
  name,
  slides,
  headline,
}) => {
  const classes = useStyles();
  const params = {
    slidesPerView: 1,
    spaceBetween: 0,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
  };
  return (
    <div className={classes.sliderWrapper}>
      {name && <h2 className={classes.sectionTitle}>{name}</h2>}
      {headline && <div>{headline}</div>}
      <Swiper {...params}>
        {slides.map((slide: any) => (
          <div key={slide.slug.current}>
            {slide.heroImage && (
              <Img
                fluid={slide.heroImage.asset.fluid}
                alt={slide.heroImage.alt}
              />
            )}
            <div className={classes.copy}>
              <div className={classes.copyInner}>
                <h2 className={classes.heading}>{slide.headline}</h2>
                <Link
                  className={classes.callToAction}
                  to={slide.slug ? slide.slug.current : '/'}
                >
                  Go to Article
                </Link>
              </div>
            </div>
          </div>
        ))}
      </Swiper>
    </div>
  );
};

export default HeroSlider;
