import React, { FunctionComponent } from 'react';
import classNames from 'classnames';
import useStyles from '../styles';

const Fieldset: FunctionComponent<FieldsetInterface> = ({
  children,
  legend,
}) => {
  const classes = useStyles();

  return (
    <fieldset className={classNames('c-form__fielset', classes.fieldset)}>
      <legend className={classes.srOnly}>{legend}</legend>
      {children}
    </fieldset>
  );
};

export default Fieldset;

interface FieldsetInterface {
  legend: string;
  children: any;
}
