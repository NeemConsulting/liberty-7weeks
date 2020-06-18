import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Styles from './styles';

const useStyles = makeStyles(Styles);

const Button = (props: ButtonProps) => {
  const classes = useStyles();
  const { lable, ...rest } = props;
  return (
    <a target="_blank" rel="noreferrer" href={'https://google.com'} {...rest}>
      <button className={classes.Button}>{lable}</button>
    </a>
  );
};

export default Button;

interface ButtonProps {
  lable: string;
}
