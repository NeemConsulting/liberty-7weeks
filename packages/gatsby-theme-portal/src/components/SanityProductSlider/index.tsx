import React, { FunctionComponent } from 'react';
import { SanityProductSliderInterface } from './models';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import TileSlider from '../TileSlider';

import Styles from './styles';
const useStyles = makeStyles(Styles);

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
