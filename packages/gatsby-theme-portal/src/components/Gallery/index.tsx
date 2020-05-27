import React, { FunctionComponent } from 'react';
import Img from 'gatsby-image';
import classNames from 'classnames';
import { makeStyles } from '@material-ui/core/styles';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

import { ReactComponent as Next } from '../../images/icons/next.svg';
import PageSchema from '../PageSchema';

const useStyles = makeStyles(theme => ({
  galleryWrapper: {
    textAlign: 'center',
    padding: '0 0 20px',
    marginBottom: 20,
    '& .carousel-root': {
      display: 'flex',
      flexDirection: 'column',
    },
    '& .carousel': {
      order: 2,
      maxWidth: 750,
      maxHeight: 500,
      margin: 'auto',
      '& .slide': {
        opacity: 0.2,
      },
      '& .slide.selected': {
        opacity: 1,
      },
      '& .thumbs-wrapper': {
        display: 'none',
        [theme.breakpoints.up('md')]: {
          maxWidth: 750,
          margin: 'auto',
          display: 'block',
        },
      },
      '& .thumb': {
        transition: 'all .6s ease 0s',
        cursor: 'pointer',
        opacity: 0.2,
        '&:hover': {
          borderColor: '#FF3366',
        },
        '&.selected': {
          borderColor: '#FF3366',
          opacity: 1,
        },
      },
      '& .thumbs': {
        padding: 0,
        textAlign: 'left',
      },
    },
    '& .carousel-status': {
      background: theme.palette.common.black,
      left: 0,
      right: 'auto',
      margin: 0,
      paddingLeft: 15,
      paddingRight: 15,
      fontSize: '1rem',
      fontWeight: 700,
      '& span': {
        fontWeight: 500,
      },
    },
    '& .carousel + .carousel': {
      order: 1,
    },
  },
  carouselArrow: {
    display: 'none',
    [theme.breakpoints.up('md')]: {
      position: 'absolute',
      zIndex: 2,
      top: 'calc(50% - 50px)',
      width: 77,
      height: 77,
      cursor: 'pointer',
      backgroundColor: 'transparent',
      border: 'none',
      display: 'block',
      right: 15,
      transition: 'all .4s ease 0s !important',
      '& svg': {
        transition: 'all .4s ease 0s !important',
      },
      '&:hover': {
        right: 10,
        '& svg': {
          fill: '#ff3366',
        },
      },
      '&:focus': {
        right: 10,
        '& svg': {
          fill: '#ff3366',
        },
      },
    },
  },
  carouselArrowPrev: {
    left: 15,
    transform: 'rotate(180deg)',
    right: 'auto',
    '&:hover': {
      left: 10,
    },
    '&:focus': {
      left: 10,
    },
  },
}));

const Gallery: FunctionComponent<GalleryInterface> = ({ data, slug, name, authorName }) => {
  const classes = useStyles();
  const renderArrowPrev = (
    onClickHandler: any,
    hasPrev: any,
    label: string
  ) => {
    return (
      hasPrev && (
        <button
          className={classNames(
            classes.carouselArrow,
            classes.carouselArrowPrev
          )}
          type="button"
          onClick={onClickHandler}
          title={label}
        >
          <Next />
        </button>
      )
    );
  };

  const renderArrowNext = (
    onClickHandler: any,
    hasNext: any,
    label: string
  ) => {
    return (
      hasNext && (
        <button
          className={classes.carouselArrow}
          type="button"
          onClick={onClickHandler}
          title={label}
        >
          <Next />
        </button>
      )
    );
  };

  const renderThumbs = () => {
    return data.map((picture: any) => (
      <div key={picture.asset._id}>
        <Img
          className="img-responsive"
          fluid={picture.asset.fluid}
          alt={picture.alt}
        />
      </div>
    ));
  };

  return (
    <>
      <PageSchema type={'ImageGallery'} {...{ name, slug, data, authorName }} />;
      <div className={classes.galleryWrapper}>
        <Carousel
          statusFormatter={(current, total) => {
            return `${current} / ${total}`;
          }}
          renderArrowPrev={renderArrowPrev}
          renderArrowNext={renderArrowNext}
          renderThumbs={renderThumbs}
          centerMode
          centerSlidePercentage={100}
        >
          {data.map((picture: any) => (
            <div key={picture.asset._id}>
              <Img
                className="img-responsive"
                fluid={picture.asset.fluid}
                alt={picture.alt}
              />
            </div>
          ))}
        </Carousel>
      </div>
    </>
  );
};

interface GalleryInterface {
  data: any;
  slug?: string;
  name?: string;
  authorName?: string;
}
export default Gallery;
