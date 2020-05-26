import React, { FunctionComponent } from 'react';
import { SanityProductSliderInterface } from './models';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Img from 'gatsby-image';
import { Link } from 'gatsby';
import TileSlider from '../TileSlider';

const useStyles = makeStyles(theme => ({
  section: {
    paddingBottom: 48,
    [theme.breakpoints.up('md')]: {
      paddingTop: 48,
      paddingBottom: 48,
    },
  },
}));

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
