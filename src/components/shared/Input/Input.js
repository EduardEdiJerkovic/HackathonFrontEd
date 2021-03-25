import React from 'react';
import injectSheet from 'react-jss';
import { borderColor } from '../../../assets/shared/styles/general';

import styles from './Input.styles';

const Input = (props) => {
  const {
    classes,
    name,
    placeholder,
    onChange,
    type,
    disabled,
    value,
    autoFocus,
    errorClass,
  } = props;

  return (
        <input
          className={classes.input}
          placeholder={placeholder}
          onChange={onChange}
          type={type}
          name={name}
          placeholder={message}
          disabled={disabled}
          value={value}
          autoFocus={autoFocus}
        />
      )
};

SmInput.defaultProps = {
  type: 'text',
  marginBottom: '0px',
  disabled: false,
  border: `solid 1px ${borderColor}`,
  value: '',
  borderRadius: '3px',
  autoFocus: false
};

export default injectSheet(styles)(Input);
