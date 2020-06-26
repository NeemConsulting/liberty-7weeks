import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Styles from './styles';

const useStyles = makeStyles(Styles);

export const PrimaryButton = (props: ButtonProps) => {
  const classes = useStyles();
  const { lable, link, ...rest } = props;
  return (
    <a target="_blank" rel="noreferrer" href={link} {...rest}>
      <button className={classes.PrimaryButton}>{lable}</button>
    </a>
  );
};

export const SecondaryButton = (props: ButtonProps) => {
  const classes = useStyles();
  const { lable, link, ...rest } = props;
  return (
    <a target="_blank" rel="noreferrer" href={link} {...rest}>
      <button className={classes.SecondaryButton}>{lable}</button>
    </a>
  );
};

interface ButtonProps {
  lable: string;
  link: string;
}
