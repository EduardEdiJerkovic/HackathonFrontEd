import React from 'react';
import injectSheet from 'react-jss';

<<<<<<< HEAD
import { regular, white } from '../../../assets/shared/styles/general';
=======
>>>>>>> a9bae6bc5466df3aec2e1ef056fd067f5716f45e
import styles from './Button.styles';

const Button = (props) => {
  const { classes, onClick, disabled, className, type } = props;

  return (
    <button className={classes.smButton} type={type} disabled={disabled} onClick={onClick}>
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
