import React, { FunctionComponent, useState } from 'react';
import Img from 'gatsby-image';
import { Link } from 'gatsby';

import Grid from '@material-ui/core/Grid';
import { Typography } from '@material-ui/core';
import { TileStackerInterface } from './models';
import { ReactComponent as PlayVideo } from '../../images/icons/play.svg';
import useStyles from './styles';

const TileStacker: FunctionComponent<TileStackerInterface> = ({
  name,
  slides,
  headline,
}) => {
  const classes = useStyles();

  const renderer = slide => {
    return (
      <Grid item xs={12} md={4}>
        <div key={slide.headline}>
          <div className={classes.tile}>
            <span className={classes.slideType}>{slide._type}</span>
            <Link className={classes.sliderLink} to={slide.path}>
              {slide.heroImage && (
                <div className={classes.heroImage}>
                  <Img
                    fluid={slide.heroImage.asset.fluid}
                    alt={slide.heroImage.alt}
                    style={{ height: '237px' }}
                    imgStyle={{ objectPosition: 'top center' }}
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
      </Grid>
    );
  };

  return (
    <div className={classes.root}>
      <div className={classes.sectionTitle}>
        <Typography variant="h2" className={classes.sliderTitle}>
          {headline}
        </Typography>
      </div>
      <Grid container spacing={3}>
        {slides.map(slide => renderer(slide))}
      </Grid>
    </div>
  );
};

export default TileStacker;
