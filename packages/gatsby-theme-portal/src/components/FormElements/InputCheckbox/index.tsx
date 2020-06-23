import React, { FunctionComponent } from 'react';
import classNames from 'classnames';
import useStyles from '../styles';

const InputCheckbox: FunctionComponent<InputCheckboxInterface> = ({
  label,
  name,
  id,
  required,
  onChange,
  checked,
}) => {
  const classes = useStyles();

  return (
    <div
      className={classNames('c-form__field', classes.field, classes.checkbox)}
    >
      <input
        id={id}
        type="checkbox"
        name={name}
        value="true"
        required={required}
        onChange={onChange}
        checked={checked}
      />
      <span aria-hidden="true"></span>
      <label htmlFor={id}>{label}</label>
      <svg
        aria-hidden="true"
        width="15"
        height="14"
        viewBox="0 0 15 14"
        fill="none"
        focusable="false"
      >
        <path d="M2 8.36364L6.23077 12L13 2"></path>
      </svg>
      <svg
        aria-hidden="true"
        focusable="false"
        xmlns="http://www.w3.org/2000/svg"
        version="1.1"
      >
        <defs>
          <filter id="goo">
            <fegaussianblur
              in="SourceGraphic"
              stdDeviation="4"
              result="blur"
            ></fegaussianblur>
            <fecolormatrix
              in="blur"
              mode="matrix"
              values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 22 -7"
              result="goo"
            ></fecolormatrix>
            <feblend in="SourceGraphic" in2="goo"></feblend>
          </filter>
        </defs>
      </svg>
    </div>
  );
};

export default InputCheckbox;

interface InputCheckboxInterface {
  label: string;
  id: string;
  name: string;
  required: boolean;
  onChange: any;
  checked: boolean;
}
