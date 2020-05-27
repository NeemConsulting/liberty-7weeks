import React, { FunctionComponent } from 'react';
import classNames from 'classnames';
import { SanityArticleSliderInterface } from './models';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import ArticleTileSlider from '../ArticleTileSlider';
import HeroSlider from '../HeroSlider';
import TileStacker from '../TileStacker';

import Styles from './styles';
const useStyles = makeStyles(Styles);

const componentMap = {
  tile: ArticleTileSlider,
  hero: HeroSlider,
  stacker: TileStacker,
  default: TileStacker,
};

const SanityArticleSlider: FunctionComponent<SanityArticleSliderInterface> = ({
  name,
  slides,
  headline,
  slideType,
}) => {
  const classes = useStyles();

  // @todo we should take presentationType from props;
  const getComponentName = (sliderType: string) => {
    sliderType = slideType.name.toLowerCase();
    if (sliderType.indexOf('hero') >= 0) return 'hero';
    if (sliderType.indexOf('tile') >= 0) return 'tile';
    if (sliderType.indexOf('stacker') >= 0) return 'stacker';
  };
  const componentName = getComponentName(slideType);
  const Component = componentMap[componentName] || componentMap.default;

  return (
    <section className={classNames(classes.section, componentName)}>
      <Container maxWidth="lg">
        <Component {...{ name, slides, headline }} />
      </Container>
    </section>
  );
};

export default SanityArticleSlider;
