import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Styles from './styles';

const useStyles = makeStyles(Styles);

const Button = (props: ButtonProps) => {
  const classes = useStyles();
  const { lable, link, ...rest } = props;
  return (
    <a target="_blank" rel="noreferrer" href={link} {...rest}>
      <button className={classes.Button}>{lable}</button>
    </a>
  );
};

export default Button;

interface ButtonProps {
  lable: string;
  link: string;
}
