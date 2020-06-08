import React, { FunctionComponent } from 'react';
import { SanityProductSliderInterface } from './models';

import Container from '@material-ui/core/Container';
import TileSlider from '../TileSlider';

import useStyles from './styles';

const SanityProductSlider: FunctionComponent<SanityProductSliderInterface> = ({
  name,
  slides,
  headline,
}) => {
  const classes = useStyles();

  return (
    <section className={classes.section}>
      <Container>
        <TileSlider name={name} slides={slides} headline={headline} />
      </Container>
    </section>
  );
};

export default SanityProductSlider;
