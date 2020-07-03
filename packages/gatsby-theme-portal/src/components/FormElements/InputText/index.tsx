import React, { FunctionComponent } from 'react';
import classNames from 'classnames';
import useStyles from '../styles';

const InputText: FunctionComponent<InputTextInterface> = ({
  type,
  label,
  id,
  required,
  value,
  onChange,
  valid,
  validate,
}) => {
  const classes = useStyles();
  return (
    <div
      className={classNames(
        'c-form__field',
        classes.field,
        classes.textField,
        valid ? 'valid' : validate ? classes.error : null
      )}
    >
      <input
        id={id}
        type={type}
        autoComplete={id}
        aria-required={required}
        aria-invalid="false"
        required={required}
        value={value}
        onChange={onChange}
        aria-label={label}
      />
      <label htmlFor={id} aria-hidden="true">
        {label}
      </label>
    </div>
  );
};

export default InputText;

interface InputTextInterface {
  type: string;
  label: string;
  id: string;
  required: boolean;
  value: string;
  onChange: any;
  valid: any;
  validate: boolean;
}
