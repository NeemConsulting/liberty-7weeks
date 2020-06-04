import React, { FunctionComponent, useEffect, useState } from 'react';
import classNames from 'classnames';
import { makeStyles } from '@material-ui/core/styles';

import { ReactComponent as ArrowUp } from '../../images/icons/up.svg';

import Styles from './styles';
const useStyles = makeStyles(Styles);

const BackToTop: FunctionComponent = () => {
  const classes = useStyles();
  const [isHidden, setIsHidden] = useState(true);

  const onScroll = () => {
    const top = window.pageYOffset || document.documentElement.scrollTop;
    setIsHidden(top <= 250);
  };

  useEffect(() => {
    window.addEventListener('scroll', onScroll);
    return () => {
      window.removeEventListener('scroll', onScroll);
    };
  }, [isHidden]);

  const handleClick = (event: any) => {
    event.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <a
      href="#top"
      className={classNames(
        classes.element,
        isHidden ? classes.isHidden : classes.isActive
      )}
      onClick={handleClick}
    >
      <ArrowUp />
      <span className={classes.srOnly}>Top</span>
    </a>
  );
};

export default BackToTop;
