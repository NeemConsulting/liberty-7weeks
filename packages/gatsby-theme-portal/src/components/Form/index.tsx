import React, { FunctionComponent } from 'react';
import classNames from 'classnames';
import useStyles from './styles';

const Form: FunctionComponent<FormProps> = ({ children, onsubmit }) => {
  const classes = useStyles();

  return (
    <form
      className={classNames('c-form', classes.formWrapper)}
      action="/subscribe"
      method="post"
      id="subscribe"
      onSubmit={onsubmit}
      noValidate
    >
      {children}
    </form>
  );
};

export default Form;

interface FormProps {
  children: any;
  onsubmit: any;
}
