import React, { FunctionComponent } from 'react';
import Img from 'gatsby-image';
import classNames from 'classnames';
import { makeStyles } from '@material-ui/core/styles';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

import { ReactComponent as Next } from '../../images/icons/next.svg';
import PageSchema from '../PageSchema';

import Styles from './styles';
const useStyles = makeStyles(Styles);

const Gallery: FunctionComponent<GalleryInterface> = ({
  data,
  slug,
  name,
  authorName,
}) => {
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
          style={{ width: '80px', height: '80px' }}
          imgStyle={{ height: '80px' }}
        />
      </div>
    ));
  };

  return (
    <>
      <PageSchema type={'ImageGallery'} {...{ name, slug, data, authorName }} />
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
                style={{ left: '50%', transform: 'translateX(-50%)' }}
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
