import React, { FunctionComponent } from 'react';
import classNames from 'classnames';
import { SanityArticleSliderInterface } from './models';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import ArticleTileSlider from '../ArticleTileSlider';
import HeroSlider from '../HeroSlider';

import Styles from './styles';
const useStyles = makeStyles(Styles);

const SanityArticleSlider: FunctionComponent<SanityArticleSliderInterface> = ({
  name,
  slides,
  headline,
  slideType,
}) => {
  const classes = useStyles();

  const heroSliderType = slideType.name.indexOf('Hero') >= 0;
  const tileSliderType = slideType.name.indexOf('Tile') >= 0;

  return (
    <section className={classes.section}>
      <Container maxWidth="lg">
        {slides && heroSliderType && (
          <HeroSlider name={name} slides={slides} headline={headline} />
        )}
        {slides && tileSliderType && (
          <ArticleTileSlider name={name} slides={slides} headline={headline} />
        )}
      </Container>
    </section>
  );
};

export default SanityArticleSlider;
