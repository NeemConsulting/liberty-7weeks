import React, { FunctionComponent } from 'react';
import ScrollToTop from 'react-scroll-up';
import { makeStyles } from '@material-ui/core/styles';

import { ReactComponent as ArrowUp } from '../../images/icons/up.svg';

import Styles, { inlineStyle } from './styles';
const useStyles = makeStyles(Styles);

const BackToTop: FunctionComponent = () => {
  const classes = useStyles();
  const handleClick = (event: any) => {
    event.preventDefault();
  };
  return (
    <ScrollToTop style={inlineStyle} showUnder={160}>
      <a href="#main" onClick={handleClick} className={classes.wrapper}>
        <ArrowUp />
        Top
      </a>
    </ScrollToTop>
  );
};

export default BackToTop;
