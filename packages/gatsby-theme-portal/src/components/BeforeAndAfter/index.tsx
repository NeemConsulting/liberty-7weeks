import React, { FunctionComponent } from 'react';
import {
  ReactCompareSlider,
  ReactCompareSliderImage,
} from 'react-compare-slider';
import useStyles from './styles';

const BeforeAndAfter: FunctionComponent = ({ images }) => {
  const classes = useStyles();
  const { beforeImage, afterImage } = images;
  return (
    <div className={classes.wrapper}>
      <ReactCompareSlider
        itemOne={
          <ReactCompareSliderImage
            src={`${beforeImage.asset.url}?w=600&h=400&auto=format&fit=crop`}
            alt={beforeImage.alt}
          />
        }
        itemTwo={
          <ReactCompareSliderImage
            src={`${afterImage.asset.url}?w=600&h=400&auto=format&fit=crop`}
            alt={afterImage.alt}
          />
        }
      />
    </div>
  );
};

export default BeforeAndAfter;
