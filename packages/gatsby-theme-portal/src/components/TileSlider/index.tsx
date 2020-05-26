import React, { FunctionComponent } from 'react';
import { TileSliderInterface } from './models';
import { makeStyles } from '@material-ui/core/styles';
import Img from 'gatsby-image';
import { Link } from 'gatsby';
import Swiper from 'react-id-swiper';
import 'swiper/css/swiper.css';

const useStyles = makeStyles(theme => ({
  sectionTitle: {
    display: 'flex',
    flexDirection: 'column',
    marginBottom: 10,
    [theme.breakpoints.up('md')]: {
      marginBottom: 24,
      flexDirection: 'row',
      alignItems: 'center',
    },
  },
  sectionLink: {
    color: theme.palette.common.black,
    textDecoration: 'none',
    fontSize: '.875rem',
    fontWeight: 700,
    alignSelf: 'flex-start',
    backgroundImage: 'linear-gradient(120deg,#ff3366 0%,#ff3366 100%)',
    backgroundRepeat: 'no-repeat',
    backgroundSize: '100% .1875rem',
    backgroundPosition: '0 100%',
    [theme.breakpoints.up('md')]: {
      fontSize: '1.125rem',
      marginLeft: 10,
      alignSelf: 'center',
    },
    '&:hover, &:focus': {
      backgroundImage: 'linear-gradient(120deg,#000 0%,#000 100%)',
    },
  },
  heroImage: {
    position: 'relative',
    '& picture img': {
      transition: 'all 1.2s ease 0s !important',
    },
  },
  iconPlay: {
    width: '2.5rem',
    height: '2.5rem',
    bottom: '.5rem',
    left: '.5rem',
    backgroundColor: '#ff3366',
    position: 'absolute',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    transition: 'all 1.2s ease 0s !important',
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
    '& svg': {
      width: '1.5rem',
      height: '1.5rem',
      fill: theme.palette.common.white,
      [theme.breakpoints.up('md')]: {
        width: '2rem',
        height: '2rem',
      },
    },
    [theme.breakpoints.up('md')]: {
      width: '3.25rem',
      height: '3.25rem',
      bottom: '.6875rem',
      left: '.6875rem',
    },
  },
  slider: {
    paddingTop: 30,
    [theme.breakpoints.up('md')]: {
      paddingTop: 0,
      paddingBottom: 20,
    },
    '& .gatsby-image-wrapper': {
      height: 180,
      [theme.breakpoints.up('md')]: {
        height: 270,
      },
    },
    '& a': {
      textDecoration: 'none',
    },
    '& .swiper-container': {
      overflow: 'visible',
    },
    '& .swiper-button-prev, & .swiper-button-next': {
      transition: 'all .3s ease 0s',
    },
    '& .swiper-button-prev': {
      color: theme.palette.common.black,
      top: '35%',
      left: -50,
      height: 64,
      '&:hover': {
        color: '#ff3366',
        left: -55,
      },
      '&:after': {
        height: 64,
        fontSize: '4rem',
      },
    },
    '& .swiper-button-next': {
      color: theme.palette.common.black,
      top: '35%',
      right: -50,
      height: 64,
      '&:hover': {
        color: '#ff3366',
        right: -55,
      },
      '&:after': {
        height: 64,
        fontSize: '4rem',
      },
    },
    '& .swiper-scrollbar': {
      backgroundColor: 'transparent',
    },
    '& .swiper-scrollbar-drag': {
      backgroundColor: 'rgba(0,0,0,.2)',
    },
    '& .swiper-container-horizontal > .swiper-scrollbar': {
      width: '100%',
      bottom: -15,
      height: 5,
      left: 0,
      [theme.breakpoints.up('md')]: {
        height: 10,
        bottom: -30,
      },
    },
    '& .swiper-slide': {
      opacity: 0.2,
    },
    '& .swiper-slide.swiper-slide-active': {
      opacity: 1,
      '& + div': {
        opacity: 1,
      },
      '& + div + div': {
        opacity: 1,
      },
      '& + div + div + div': {
        opacity: 1,
      },
    },
  },
  sliderLink: {
    display: 'block',
    '&:hover': {
      '& p > span': {
        backgroundImage: 'linear-gradient(120deg,#b8f0c0 0%,#b8f0c0 100%)',
      },
      '& .icon:before': {
        transform: 'scaleX(1)',
      },
      '& picture img': {
        // transform: 'scale(1.2)',
      },
    },
  },
  sliderTitle: {
    fontSize: '1.675rem',
    fontWeight: 600,
    marginBottom: 8,
    [theme.breakpoints.up('md')]: {
      fontSize: '2.25rem',
      marginBottom: 0,
    },
  },
  sliderItemCaption: {
    fontSize: '.875rem',
    fontWeight: 600,
    color: theme.palette.common.black,
    marginTop: 15,
    marginBottom: 5,
    textAlign: 'center',
    [theme.breakpoints.up('md')]: {
      fontSize: '1.125rem',
    },
    '& span': {
      transition: 'all .15s',
      backgroundImage:
        'linear-gradient(120deg,rgba(184,240,192,0) 0%,rgba(184,240,192,0) 100%)',
      backgroundRepeat: 'no-repeat',
      backgroundSize: '100% .1875rem',
      backgroundPosition: '0 100%',
    },
  },
  slideType: {
    position: 'absolute',
    top: 0,
    left: 0,
    backgroundColor: theme.palette.common.white,
    fontSize: '.675rem',
    fontWeight: 600,
    color: '#2c5270',
    padding: '3px 5px',
    zIndex: 1,
    textTransform: 'uppercase',
    letterSpacing: 1,
    [theme.breakpoints.up('md')]: {
      fontSize: '.75rem',
      padding: 6,
    },
  },
}));

const TileSlider: FunctionComponent<TileSliderInterface> = ({
  name,
  slides,
  headline,
}) => {
  const classes = useStyles();
  const params = {
    slidesPerView: 4,
    spaceBetween: 30,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    scrollbar: {
      el: '.swiper-scrollbar',
      hide: false,
    },
    breakpoints: {
      768: {
        slidesPerView: 4,
        spaceBetween: 30,
      },
      640: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      320: {
        slidesPerView: 3,
        spaceBetween: 20,
      },
    },
  };

  const renderer = slide => {
    return (
      <div key={slide.name}>
        <div>
          <Link
            className={classes.sliderLink}
            to={slide.slug ? slide.slug.current : '/'}
          >
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

  return (
    <div className={classes.slider}>
      <div className={classes.sectionTitle}>
        <h2 className={classes.sliderTitle}>{name}</h2>
        <Link className={classes.sectionLink} to={'/'}>
          See All
        </Link>
      </div>
      <div>{headline}</div>
      <Swiper {...params}>{slides.map(slide => renderer(slide))}</Swiper>
    </div>
  );
};

export default TileSlider;
