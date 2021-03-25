import React from 'react';
import injectSheet from 'react-jss';
import { white } from '../../../assets/shared/styles/general';

import styles from './SmButton.styles';

const Button = (props) => {
  const { classes, onClick, disabled, className } = props;

  return (
    <button className={classes.smButton} disabled={disabled} onClick={onClick}>
      {props.children}
    </button>
  );
};

Button.defaultProps = {
  fontWeight: regular,
  fontSize: '14px',
  minWidth: '197px',
  textColor: white,
  color: white,
  disabled: false
};

export default injectSheet(styles)(Button);
